import React, { useState } from "react";
import Item from "./Item";

const Board = () => {
  const [isXTurn, setIsXTure] = useState(true);
  const [state, setState] = useState(Array(9).fill(null));
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTure(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <>
          {" "}
          {isWinner} is Winner Of Games{" "}
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <h4>player {isXTurn ? "X" : "O"} Please Move</h4>
          <div className="board-row">
            <Item onClick={() => handleClick(0)} values={state[0]} />
            <Item onClick={() => handleClick(1)} values={state[1]} />
            <Item onClick={() => handleClick(2)} values={state[2]} />
          </div>
          <div className="board-row">
            <Item onClick={() => handleClick(3)} values={state[3]} />
            <Item onClick={() => handleClick(4)} values={state[4]} />
            <Item onClick={() => handleClick(5)} values={state[5]} />
          </div>
          <div className="board-row">
            <Item onClick={() => handleClick(6)} values={state[6]} />
            <Item onClick={() => handleClick(7)} values={state[7]} />
            <Item onClick={() => handleClick(8)} values={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
