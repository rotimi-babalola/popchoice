import { QuestionInput } from "./QuestionInput";
import PopChoiceLogo from "../assets/PopChoiceIcon.svg";
import { useMoviePreference } from "../hooks/useMoviePreference";
import { MovieRecommendation } from "./MovieRecommendation";
import Spinner from "./Spinner";

const MoviePreferenceForm: React.FC = () => {
  const {
    preferences,
    setPreferences,
    handlePreferenceChange,
    handleSubmit,
    recommendation,
    isPending,
    resetRecommendations,
  } = useMoviePreference();

  const handleReset = () => {
    setPreferences({
      favoriteMovie: "",
      newOrClassic: "",
      funOrSerious: "",
    });

    resetRecommendations();
  };

  const isSubmitButtonDisabled =
    !preferences.favoriteMovie ||
    !preferences.newOrClassic ||
    !preferences.funOrSerious ||
    isPending;

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

        {recommendation ? (
          <MovieRecommendation
            recommendation={recommendation.content}
            onReset={handleReset}
          />
        ) : (
          <>
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
              onClick={handleSubmit}
              disabled={isSubmitButtonDisabled}
              className={`
            w-full mt-8 py-4 px-6 rounded-lg text-2xl font-bold transition duration-150 ease-in-out
            flex items-center justify-center space-x-2
            ${
              isSubmitButtonDisabled
                ? "bg-green-300 text-indigo-700 cursor-not-allowed opacity-75" // <-- Disabled styles: cursor, less vibrant bg, adjusted text, slight opacity reduction
                : "bg-green-400 hover:bg-green-500 text-indigo-950 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-indigo-950" // <-- Normal, interactive styles
            }
          `}
            >
              {isPending ? (
                <>
                  <Spinner size="w-6 h-6" color="text-indigo-700" />
                  <span>Processing...</span>
                </>
              ) : (
                "Let's Go"
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MoviePreferenceForm;
