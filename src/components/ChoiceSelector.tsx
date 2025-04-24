import React from "react";

interface ChoiceSelectorProps {
  question: string;
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
}

const ChoiceSelector: React.FC<ChoiceSelectorProps> = ({
  question,
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4">{question}</h3>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const isSelected = selectedOption === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`
                text-black text-lg
                capitalize
                font-medium
                py-2 px-6
                rounded-lg
                transition duration-150 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-950
                ${
                  isSelected
                    ? "bg-indigo-500 ring-2 ring-indigo-300"
                    : "bg-slate-600 hover:bg-slate-500 focus:ring-slate-400"
                }
              `}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ChoiceSelector;
