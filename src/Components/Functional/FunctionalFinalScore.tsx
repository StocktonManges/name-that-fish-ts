import { scoreProps } from "./FunctionalApp";
import "./styles/final-score.css";

export const FunctionalFinalScore = ({
  parentScore,
}: {
  parentScore: scoreProps;
}) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{parentScore.correct}</p>
      <hr />
      <p>{parentScore.incorrect + parentScore.correct}</p>
    </div>
  </div>
);
