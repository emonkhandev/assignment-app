import { useState, use } from 'react';
import type { Icu } from '../types/Type';
import Avable from './Avable';
import YourStack from './YourStack';
interface SubjectProps {
  subjectPromis: Promise<Icu[]>;
}
const Subject = ({ subjectPromis }: SubjectProps) => {
  const subject = use(subjectPromis);
  const [stackList, setStackList] = useState<Icu[]>([]);
  const handleAddStack = (item: Icu) => {
    const isExist = stackList.some((s) => s.id === item.id);
    if (!isExist) {
      setStackList([...stackList, item]);
    }
  };
  const handleRemoveItem = (id: string) => {
    setStackList(stackList.filter((item) => item.id !== id));
  };
  const handleRemoveAll = () => {
    setStackList([]);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Explore the <span className="text-rose-500">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Pick one technology per category to build your ideal stack
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 w-full">
          <Avable subjects={subject} onAddStack={handleAddStack} stackList={stackList} />
        </div>
        <div className="w-full lg:w-80 sticky top-6">
          <YourStack
            stackList={stackList}
            onRemoveItem={handleRemoveItem}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Subject;