import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let [arr, setArr] = useState(["No Moves"]);

  let updateBlue = () => {
    setMoves((preMoves) => {
      return { ...preMoves, blue: preMoves.blue + 1 };
    });

    setArr((prevArr) => {
      return [...prevArr, ", Blue Moves"];
    });
  };

  let updateYellow = () => {
    setMoves((preMoves) => {
      return { ...preMoves, yellow: preMoves.yellow + 1 };
    });

    setArr((prevArr) => {
      return [...prevArr, ", Yellow Moves"];
    });
  };

  let updateGreen = () => {
    setMoves((preMoves) => {
      return { ...preMoves, green: preMoves.green + 1 };
    });

    setArr((prevArr) => {
      return [...prevArr, ", Green Moves"];
    });
  };

  let updateRed = () => {
    setMoves((preMoves) => {
      return { ...preMoves, red: preMoves.red + 1 };
    });

    setArr((prevArr) => {
      return [...prevArr, ", Red Moves"];
    });
  };

  return (
    <div>
      <h3>Game Begins!</h3>
      <h4>{arr}</h4>
      <br />

      <h4>Blue moves : {moves.blue}</h4>
      <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
        +1
      </button>

      <h4>Yellow moves : {moves.yellow}</h4>
      <button
        style={{ backgroundColor: "yellow", color: "black" }}
        onClick={updateYellow}
      >
        +1
      </button>

      <h4>Green moves : {moves.green}</h4>
      <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
        +1
      </button>

      <h4>Red moves : {moves.red}</h4>
      <button style={{ backgroundColor: "red" }} onClick={updateRed}>
        +1
      </button>
    </div>
  );
}
