import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

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

export type scoreProps = {
  correct: number;
  incorrect: number;
};

export type fishProps = { name: string; url: string }[];

export class ClassApp extends Component {
  state = {
    correct: 0,
    incorrect: 0,
  };

  render() {
    const totalGuesses = this.state.correct + this.state.incorrect;
    return (
      <>
        {(totalGuesses < 4 && (
          <>
            <ClassScoreBoard parentScore={this.state} fishes={initialFishes} />
            <ClassGameBoard
              setParentScore={(value) => {
                this.setState(value);
              }}
              parentScore={this.state}
              fishes={initialFishes}
            />
          </>
        )) || <ClassFinalScore parentScore={this.state} />}
      </>
    );
  }
}
