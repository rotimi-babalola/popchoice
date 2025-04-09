type QuestionInputProps = {
  question: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  name: string; // Added: name attribute for the textarea
  rows?: number;
};

export const QuestionInput: React.FC<QuestionInputProps> = ({
  question,
  value,
  onChange,
  id,
  name,
}) => {
  return (
    <div className="w-full mb-6">
      <label
        htmlFor={id}
        className="block text-lg font-semibold mb-2 text-white"
      >
        {question}
      </label>
      <textarea
        id={id}
        name={name}
        className="w-full p-4 bg-indigo-800/70 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
