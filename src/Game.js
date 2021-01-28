import React from "react";
import rock from "./rock.png";
import paper from "./paper.png";
import scissor from "./scissor.png";

function Game() {
  return (
    <div className="container">
      <header>
        <h1>Rock Paper Scissor</h1>
      </header>
      <div className="body">
        <div className="scores">
          <div className="score user-score">
            <p>
              User
              <span> 0</span>
            </p>
          </div>
          <div className="line">:</div>
          <div className="score computer-score">
            <p>
              <span> 0</span> Computer
            </p>
          </div>
        </div>
        <div className="game-section">
          <div className="choice rock">
            <img width="150px" src={rock} alt="rock" />
          </div>
          <div className="choice paper">
            <img width="150px" src={paper} alt="paper" />
          </div>
          <div className="choice scissor">
            <img width="150px" src={scissor} alt="scissor" />
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
