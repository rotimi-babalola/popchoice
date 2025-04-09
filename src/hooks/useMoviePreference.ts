import { useState } from "react";

type MoviePreferences = {
  favoriteMovie: string;
  newOrClassic: string;
  funOrSerious: string;
};

export const useMoviePreference = () => {
  const [preferences, setPreferences] = useState<MoviePreferences>({
    favoriteMovie: "",
    newOrClassic: "",
    funOrSerious: "",
  });

  const handlePreferenceChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted preferences:", preferences);
  };

  return {
    preferences,
    handlePreferenceChange,
    handleSubmit,
  };
};
