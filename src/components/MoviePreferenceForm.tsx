import { QuestionInput } from "./QuestionInput";
import PopChoiceLogo from "../assets/PopChoiceIcon.svg";
import { useMoviePreference } from "../hooks/useMoviePreference";
import { MovieRecommendation } from "./MovieRecommendation";
import Spinner from "./Spinner";
import MoodSelection from "./MoodSelection";

const MoviePreferenceForm: React.FC = () => {
  const {
    preferences,
    setPreferences,
    handlePreferenceChange,
    handleSubmit,
    recommendation,
    isLoading,
    resetRecommendations,
  } = useMoviePreference();

  const handleReset = () => {
    setPreferences({
      favoriteMovie: "",
      era: null,
      mood: null,
    });

    resetRecommendations();
  };

  const isSubmitButtonDisabled =
    !preferences.favoriteMovie ||
    !preferences.era ||
    !preferences.mood ||
    isLoading;

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

              <MoodSelection
                eraOptions={["new", "classic"]}
                moodOptions={["fun", "serious", "inspiring", "scary"]}
                selectedEra={preferences.era}
                selectedMood={preferences.mood}
                onSelectEra={(era) => setPreferences({ ...preferences, era })}
                onSelectMood={(mood) =>
                  setPreferences({ ...preferences, mood })
                }
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
              {isLoading ? (
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
