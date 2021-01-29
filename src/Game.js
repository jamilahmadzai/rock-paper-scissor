import React, { useEffect, useState } from "react";
import rock from "./rock.png";
import paper from "./paper.png";
import scissor from "./scissor.png";
import user_image from "./user.png";
import computer_image from "./computer.png";

function Game() {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("Select Your Option");
  const [winner, setWinner] = useState("");

  const game = (userChoice) => {
    const comp = computerChoice();
    const choice = userChoice + comp;
    if (
      choice === "rockscissor" ||
      choice === "paperrock" ||
      choice === "scissorpaper"
    ) {
      console.log(userChoice + " " + comp);
      win(userChoice, comp);
    } else if (
      choice === "scissorrock" ||
      choice === "rockpaper" ||
      choice === "paperscissor"
    ) {
      console.log(userChoice + " " + comp);
      lose(userChoice, comp);
    } else {
      console.log(userChoice + " " + comp);
      draw(userChoice, comp);
    }
  };

  const capitalize = (capitalize) => {
    return capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
  };

  const win = (userChoice, comp) => {
    setUserScore(userScore + 1);
    setResult(
      `Your ${capitalize(userChoice)} beats Computer's ${capitalize(comp)}`
    );
  };

  const lose = (userChoice, comp) => {
    setComputerScore(computerScore + 1);
    setResult(
      `Your ${capitalize(userChoice)} loses to Computer's ${capitalize(comp)}`
    );
  };

  const draw = (userChoice, comp) => {
    setResult(`Draw: As ${capitalize(userChoice)} equals ${capitalize(comp)}`);
  };

  const computerChoice = () => {
    const comp = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return comp[random];
  };

  const showWinner = (
    <div>
      <div className="win">
        <img
          className="res"
          src={userScore === 5 ? user_image : computer_image}
          alt="user"
        />
        <p className="res para green">Won</p>
      </div>
      <div className="lose">
        <img
          className="res"
          src={computerScore === 5 ? user_image : computer_image}
          alt="computer"
        />
        <p className="res para red">Lost</p>
      </div>
      <button className="btn-play" onClick={() => window.location.reload()}>
        Play Again!
      </button>
    </div>
  );

  useEffect(() => {
    if (userScore < 5) {
      setUserScore(userScore);
    } else {
      setWinner(showWinner);
    }
  }, [userScore]);

  useEffect(() => {
    if (computerScore < 5) {
      setComputerScore(computerScore);
    } else {
      setWinner(showWinner);
    }
  }, [computerScore]);

  return (
    <div className="container">
      <header>
        <h1>Rock Paper Scissor</h1>
      </header>
      <div className="body">
        <div className="scores">
          <div className="score user-score">
            <img src={user_image} alt="user " />
            <p>{userScore}</p>
          </div>

          <div className="score computer-score">
            <img src={computer_image} alt="computer " />
            <p>{computerScore}</p>
          </div>
        </div>
        <div className="game-section">
          <div
            className={
              userScore === 5 || computerScore === 5
                ? "choice rock disable"
                : "choice rock"
            }
          >
            <img src={rock} alt="rock" onClick={() => game("rock")} />
          </div>
          <div
            className={
              userScore === 5 || computerScore === 5
                ? "choice rock disable"
                : "choice rock"
            }
          >
            <img src={paper} alt="paper" onClick={() => game("paper")} />
          </div>
          <div
            className={
              userScore === 5 || computerScore === 5
                ? "choice rock disable"
                : "choice rock"
            }
          >
            <img src={scissor} alt="scissor" onClick={() => game("scissor")} />
          </div>
        </div>
        <div className="result">
          <h2>{result}</h2>
        </div>
        <div className="winner">{winner}</div>
      </div>
    </div>
  );
}

export default Game;
