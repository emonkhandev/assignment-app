import type { Icu } from '../types/Type';
import SubjCard from './SubjCard';

interface AvailableProps {
  subjects: Icu[];
  onAddStack: (item: Icu) => void;
}
const Available = ({ subjects, onAddStack }: AvailableProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Available Technologies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((item) => (
          <SubjCard key={item.id} item={item} onAddStack={onAddStack} />
        ))}
      </div>
    </div>
  );
};

export default Available;