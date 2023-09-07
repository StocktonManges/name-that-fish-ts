import "./styles/score-board.css";
import { scoreProps } from "./FunctionalApp";

export function FunctionalScoreBoard({
  parentScore,
  answersLeft,
}: {
  parentScore: scoreProps;
  answersLeft: string[];
}) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {parentScore.incorrect}</div>
      <div id="choices-left">
        {answersLeft.map((fish) => (
          <div key={fish} className="choice">
            {fish}
          </div>
        ))}
      </div>
      <div>Correct ✅: {parentScore.correct}</div>
    </div>
  );
}
