import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

export type scoreProps = {
  correct: number;
  incorrect: number;
};

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [score, setScore] = useState({
    correct: 0,
    incorrect: 0,
  });
  const totalGuesses = score.correct + score.incorrect;
  const currentFish = initialFishes[totalGuesses];
  const answersLeft = initialFishes
    .slice(totalGuesses)
    .map((fish) => fish.name);

  const updateScore = (guess: string) => {
    const arr = currentFish.name === guess ? [1, 0] : [0, 1];
    setScore({
      correct: score.correct + arr[0],
      incorrect: score.incorrect + arr[1],
    });
  };

  return (
    <>
      {(totalGuesses < initialFishes.length && (
        <>
          <FunctionalScoreBoard parentScore={score} answersLeft={answersLeft} />
          <FunctionalGameBoard
            currentFish={currentFish}
            updateScore={updateScore}
          />
        </>
      )) || <FunctionalFinalScore parentScore={score} />}
    </>
  );
}
