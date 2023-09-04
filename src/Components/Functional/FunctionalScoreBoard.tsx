import "./styles/score-board.css";
import { fishProps, scoreProps } from "./FunctionalApp";

export function FunctionalScoreBoard({
  parentScore,
  fishes,
}: {
  parentScore: scoreProps;
  fishes: fishProps;
}) {
  const totalGuesses = parentScore.correct + parentScore.incorrect;
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {parentScore.incorrect}</div>
      <div id="choices-left">
        {fishes.map((answer, index) => {
          if (index >= totalGuesses) {
            return (
              <div key={answer.name} className="choice">
                {answer.name}
              </div>
            );
          }
        })}
      </div>
      <div>Correct ✅: {parentScore.correct}</div>
    </div>
  );
}
