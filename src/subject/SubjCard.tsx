import type { Icu } from '../types/Type';

interface SubjCardProps {
  item: Icu;
  onAddStack: (item: Icu) => void;
  isInStack?: boolean;
}

const SubjCard = ({ item, onAddStack, isInStack = false }: SubjCardProps) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain" />
          {item.badge && (
            <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">
              {item.badge}
            </span>
          )}
        </div>
        <h3 className="text-base font-bold text-gray-900 mb-1">{item.name}</h3>
        <p className="text-xs text-gray-500 line-clamp-2 mb-4">{item.description}</p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <span>{item.category}</span>
          <span>{item.difficulty}</span>
        </div>
        <button
          onClick={() => onAddStack(item)}
          disabled={isInStack}
          className={`w-full py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 ${
            isInStack
              ? 'bg-blue-600 text-black cursor-not-allowed'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          {isInStack ? 'Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default SubjCard;