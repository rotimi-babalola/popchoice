import { useState } from "react";

import { movieRecommendationPrompt } from "../prompts";
import { useGetRecommendations } from "./useGetRecommendations";
import { getQueryEmbeddings } from "../utils/get-query-embedding";
import { findNearestMatch } from "../utils/find-nearest-match";
import { Era, Mood } from "../components/MoodSelection";

type MoviePreferences = {
  favoriteMovie: string;
  era: Era;
  mood: Mood;
};

export const useMoviePreference = () => {
  const [preferences, setPreferences] = useState<MoviePreferences>({
    favoriteMovie: "",
    era: null,
    mood: null,
  });

  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const { getRecommendations, data, isError, isPending, reset } =
    useGetRecommendations();

  const question = `Question: My favourite movie is: ${preferences.favoriteMovie}., 
    Right now I’d like a ${preferences.era} film that feels ${preferences.mood}.  
    What should I watch next?`;

  const handlePreferenceChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: value,
    }));
  };

  const getMovies = async () => {
    setIsLoadingDetails(true);
    try {
      // convert the user preferences to embeddings
      const embeddings = await getQueryEmbeddings({ question });

      // use embeddings vector to query the supabase vector database
      const matches = await findNearestMatch({ embeddings });

      const messages = [
        {
          role: "system",
          content: movieRecommendationPrompt,
        },
        {
          role: "user",
          content: `Context: ${matches} ${question}`,
        },
      ];

      getRecommendations({ messages });
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setIsLoadingDetails(false);
    }
  };

  const handleSubmit = async () => {
    getMovies();
  };

  return {
    preferences,
    setPreferences,
    handlePreferenceChange,
    handleSubmit,
    recommendation: data,
    isError,
    isLoading: isLoadingDetails || isPending,
    isLoadingDetails,
    isPendingRecommendation: isPending,
    resetRecommendations: reset,
  };
};
