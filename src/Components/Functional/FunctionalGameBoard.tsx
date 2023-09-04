import "./styles/game-board.css";
import { useState } from "react";
import updateScore from "./FunctionalUtils";
import { fishProps, scoreProps } from "./FunctionalApp";

export function FunctionalGameBoard({
  parentScore,
  setParentScore,
  fishes,
}: {
  parentScore: scoreProps;
  setParentScore: (value: React.SetStateAction<scoreProps>) => void;
  fishes: fishProps;
}) {
  const totalGuesses = parentScore.correct + parentScore.incorrect;
  const nextFishToName = fishes[totalGuesses];
  const [guessInput, setGuessInput] = useState("");

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          updateScore(
            guessInput,
            nextFishToName.name,
            parentScore,
            setParentScore
          );
          setGuessInput("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={guessInput}
          onChange={(e) => {
            setGuessInput(e.target.value.toLowerCase());
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
