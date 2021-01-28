import React from "react";
import rock from "./rock.png";
import paper from "./paper.png";
import scissor from "./scissor.png";
import user_image from "./user.png";
import computer_image from "./computer.png";

const game = (userChoice) => {
  const comp = computerChoice();
  const choice = userChoice + comp;
  if (
    choice === "rockscissor" ||
    choice === "paperrock" ||
    choice === "scissorpaper"
  ) {
    console.log(userChoice + " " + comp);
    win();
  } else if (
    choice === "scissorrock" ||
    choice === "rockpaper" ||
    choice === "paperscissor"
  ) {
    console.log(userChoice + " " + comp);
    lose();
  } else {
    console.log(userChoice + " " + comp);
    draw();
  }
};

const lose = () => {
  console.log("Computer WOn");
};

const win = () => {
  console.log("You Won");
};

const draw = () => {
  console.log("Draw");
};

const computerChoice = () => {
  const comp = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return comp[random];
};

function Game() {
  return (
    <div className="container">
      <header>
        <h1>Rock Paper Scissor</h1>
      </header>
      <div className="body">
        <div className="scores">
          <div className="score user-score">
            <img src={user_image} alt="user " />
            <p>0</p>
          </div>

          <div className="score computer-score">
            <img src={computer_image} alt="computer " />
            <p>0</p>
          </div>
        </div>
        <div className="game-section">
          <div className="choice rock">
            <img src={rock} alt="rock" onClick={() => game("rock")} />
          </div>
          <div className="choice paper">
            <img src={paper} alt="paper" onClick={() => game("paper")} />
          </div>
          <div className="choice scissor">
            <img src={scissor} alt="scissor" onClick={() => game("scissor")} />
          </div>
        </div>
        <div className="result">
          <h2>Paper beats rock</h2>
        </div>
      </div>
    </div>
  );
}

export default Game;
