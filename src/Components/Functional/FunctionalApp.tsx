import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

export type scoreProps = {
  correct: number;
  incorrect: number;
};

export type fishProps = { name: string; url: string }[];

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
  return (
    <>
      {(totalGuesses < 4 && (
        <>
          <FunctionalScoreBoard parentScore={score} fishes={initialFishes} />
          <FunctionalGameBoard
            setParentScore={(value) => {
              setScore(value);
            }}
            parentScore={score}
            fishes={initialFishes}
          />
        </>
      )) || <FunctionalFinalScore parentScore={score} />}
    </>
  );
}
