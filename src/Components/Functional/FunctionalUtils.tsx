import { scoreProps } from "./FunctionalApp";

export default function updateScore(
  guessInput: string,
  answer: string,
  score: scoreProps,
  setScore: (value: React.SetStateAction<scoreProps>) => void
) {
  if (guessInput === answer) {
    setScore({
      correct: score.correct + 1,
      incorrect: score.incorrect,
    });
  } else {
    setScore({
      correct: score.correct,
      incorrect: score.incorrect + 1,
    });
  }
}
