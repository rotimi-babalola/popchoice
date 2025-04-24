import React from "react";
import ChoiceSelector from "./ChoiceSelector";

export type Era = "new" | "classic" | null;
export type Mood = "fun" | "serious" | "inspiring" | "scary" | null;

type MoodSelectionProps = {
  onSelectEra: (era: Era) => void;
  onSelectMood: (mood: Mood) => void;
  selectedEra: Era;
  selectedMood: Mood;
  eraOptions: string[];
  moodOptions: string[];
};

const MoodSelection: React.FC<MoodSelectionProps> = ({
  selectedEra,
  selectedMood,
  onSelectEra,
  onSelectMood,
  eraOptions,
  moodOptions,
}) => {
  return (
    <div className="bg-indigo-950 p-6 rounded-lg shadow-lg max-w-md mx-auto font-sans">
      <ChoiceSelector
        question="Are you in the mood for something new or a classic?"
        options={eraOptions}
        selectedOption={selectedEra}
        onSelect={(option) => onSelectEra(option as Era)}
      />

      <ChoiceSelector
        question="What are you in the mood for?"
        options={moodOptions}
        selectedOption={selectedMood}
        onSelect={(option) => onSelectMood(option as Mood)}
      />

      <div className="mt-6 text-sm text-gray-400">
        <p>Selected Era: {selectedEra ?? "None"}</p>
        <p>Selected Mood: {selectedMood ?? "None"}</p>
      </div>
    </div>
  );
};

export default MoodSelection;
