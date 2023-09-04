import { Component } from "react";
import "./styles/game-board.css";
import updateScore from "./ClassUtils";
import { fishProps, scoreProps } from "./ClassApp";

export class ClassGameBoard extends Component<{
  parentScore: scoreProps;
  setParentScore: (value: React.SetStateAction<scoreProps>) => void;
  fishes: fishProps;
}> {
  state = {
    guessInput: "",
  };
  render() {
    const { correct, incorrect } = this.props.parentScore;
    const totalGuesses = correct + incorrect;
    const nextFishToName = this.props.fishes[totalGuesses];

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
              this.state.guessInput,
              nextFishToName.name,
              this.props.parentScore,
              this.props.setParentScore
            );
            this.setState({ guessInput: "" });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.guessInput}
            onChange={(e) => {
              this.setState({ guessInput: e.target.value.toLowerCase() });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
