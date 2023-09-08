import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

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

export class ClassApp extends Component {
  state = {
    correct: 0,
    incorrect: 0,
  };

  render() {
    const totalGuesses = this.state.correct + this.state.incorrect;
    const currentFish = initialFishes[totalGuesses];
    const answersLeft = initialFishes
      .slice(totalGuesses)
      .map((fish) => fish.name);

    const updateScore = (guess: string) => {
      const arr = currentFish.name === guess ? [1, 0] : [0, 1];
      this.setState({
        correct: this.state.correct + arr[0],
        incorrect: this.state.incorrect + arr[1],
      });
    };
    return (
      <>
        {(totalGuesses < initialFishes.length && (
          <>
            <ClassScoreBoard
              parentScore={this.state}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              updateScore={updateScore}
              currentFish={currentFish}
            />
          </>
        )) || <ClassFinalScore parentScore={this.state} />}
      </>
    );
  }
}
