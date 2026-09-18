import type { Icu } from '../types/Type';

interface YourStackProps {
  stackList: Icu[];
  onRemoveItem: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stackList, onRemoveItem, onRemoveAll }: YourStackProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
      <p className="text-xs text-gray-400 mb-4">{stackList.length} Technology Selected</p>

      {stackList.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-6">No technology added yet.</p>
      ) : (
        <div className="space-y-3">
          {stackList.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 leading-none">{item.name}</h4>
                  <span className="text-[10px] text-gray-400">{item.category}</span>
                </div>
              </div>
              <button onClick={() => onRemoveItem(item.id)} className="text-gray-400 hover:text-red-500 font-bold text-sm px-1">
                ✕
              </button>
            </div>
          ))}
          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2.5 text-xs font-semibold text-red-500 bg-red-50 hover:bg-red-100 rounded-xl border border-red-100"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;