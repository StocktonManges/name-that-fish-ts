import "./styles/score-board.css";
import { scoreProps } from "./FunctionalApp";

type FunctionalScoreBoardProps = {
  parentScore: scoreProps;
  answersLeft: string[];
};

export function FunctionalScoreBoard({
  parentScore,
  answersLeft,
}: FunctionalScoreBoardProps) {
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
