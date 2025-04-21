type Props = {
  recommendation: string;
  onReset: () => void;
};

export const MovieRecommendation: React.FC<Props> = ({
  recommendation,
  onReset,
}) => {
  return (
    <>
      <p className="text-white">{recommendation}</p>
      <button
        type="button"
        onClick={onReset}
        className="w-full mt-8 py-4 px-6 bg-green-400 hover:bg-green-500 rounded-lg text-2xl font-bold text-indigo-950 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-indigo-950 transition duration-150 ease-in-out"
      >
        Start again
      </button>
    </>
  );
};
