import "./styles/game-board.css";
import { useState } from "react";

type FunctionalGameBoardProps = {
  currentFish: { name: string; url: string };
  updateScore: (guess: string) => void;
};

export function FunctionalGameBoard({
  currentFish,
  updateScore,
}: FunctionalGameBoardProps) {
  const [guessInput, setGuessInput] = useState("");
  const onSubmitFunction = (e: React.FormEvent) => {
    e.preventDefault();
    updateScore(guessInput);
    setGuessInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form id="fish-guess-form" onSubmit={onSubmitFunction}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={guessInput}
          onChange={(e) => {
            setGuessInput(e.target.value.toLowerCase().replace(/\s+/g, ""));
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
