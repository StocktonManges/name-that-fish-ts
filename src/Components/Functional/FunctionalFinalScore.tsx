import "./styles/final-score.css";
import { scoreProps } from "./FunctionalApp";

type FunctionalFinalScoreProps = {
  parentScore: scoreProps;
};

export const FunctionalFinalScore = ({
  parentScore,
}: FunctionalFinalScoreProps) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{parentScore.correct}</p>
      <hr />
      <p>{parentScore.incorrect + parentScore.correct}</p>
    </div>
  </div>
);
