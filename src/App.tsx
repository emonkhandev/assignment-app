import { useState, useEffect } from 'react';
import type { Icu } from './types/Type';
import Nav from './components/Nav';
import Banner from './components/Banner';
import SubjCard from './subject/SubjCard';
import YourStack from './subject/YourStack';
import Footer from './Footer';
function App() {
  const [subjects, setSubjects] = useState<Icu[]>([]);
  const [stackList, setStackList] = useState<Icu[]>([]);
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setSubjects(data))
      .catch((err) => console.error('Error loading data:', err));
  }, []);
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
    <div className="min-h-screen flex flex-col justify-between bg-gray-50/50">
      <div>
        <Nav />
        <Banner />
        <main className="max-w-7xl mx-auto p-6 md:p-10 w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Explore the <span className="text-rose-500">Technologies</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Pick one technology per category to build your ideal stack
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((item) => {
                const isSelected = stackList.some((s) => s.id === item.id);
                return (
                  <SubjCard
                    key={item.id}
                    item={item}
                    onAddStack={handleAddStack}
                    isInStack={isSelected}
                  />
                );
              })}
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <YourStack
                  stackList={stackList}
                  onRemoveItem={handleRemoveItem}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;