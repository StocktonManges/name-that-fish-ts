import { Component } from "react";
import "./styles/game-board.css";

type ClassGameBoardProps = {
  updateScore: (guess: string) => void;
  currentFish: { name: string; url: string };
};

export class ClassGameBoard extends Component<ClassGameBoardProps> {
  state = {
    guessInput: "",
  };
  render() {
    const currentFish = this.props.currentFish;
    const onSubmitFunction = (e: React.FormEvent) => {
      e.preventDefault();
      this.props.updateScore(this.state.guessInput);
      this.setState({ guessInput: "" });
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
            value={this.state.guessInput}
            onChange={(e) => {
              this.setState({
                guessInput: e.target.value.toLowerCase().replace(/\s+/g, ""),
              });
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
