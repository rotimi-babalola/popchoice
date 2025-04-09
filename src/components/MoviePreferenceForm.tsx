import { QuestionInput } from "./QuestionInput";
import PopChoiceLogo from "../assets/PopChoiceIcon.svg";
import { useMoviePreference } from "../hooks/useMoviePreference";

const MoviePreferenceForm: React.FC = () => {
  const { preferences, handlePreferenceChange, handleSubmit } =
    useMoviePreference();

  return (
    <div className="bg-indigo-950 flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="mb-10 flex flex-col items-center">
          <img
            src={PopChoiceLogo}
            alt="PopChoice Logo"
            className="w-28 h-auto mb-4"
          />
          <h1 className="text-5xl font-bold text-white">PopChoice</h1>
        </div>

        <div className="w-full">
          <QuestionInput
            id="favoriteMovie"
            name="favoriteMovie"
            question="What's your favorite movie and why?"
            value={preferences.favoriteMovie}
            onChange={handlePreferenceChange}
          />

          <QuestionInput
            id="newOrClassic"
            name="newOrClassic"
            question="Are you in the mood for something new or a classic?"
            value={preferences.newOrClassic}
            onChange={handlePreferenceChange}
          />

          <QuestionInput
            id="funOrSerious"
            name="funOrSerious"
            question="Do you wanna have fun or do you want something serious?"
            value={preferences.funOrSerious}
            onChange={handlePreferenceChange}
          />
        </div>

        <button
          type="button"
          className="w-full mt-8 py-4 px-6 bg-green-400 hover:bg-green-500 rounded-lg text-2xl font-bold text-indigo-950 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-indigo-950 transition duration-150 ease-in-out"
          onClick={handleSubmit}
        >
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default MoviePreferenceForm;
