import React from "react";
import { useContext } from "react";
import { GameContext } from "../GameContaxt";

export default function End() {
  const { gameStatus, setGameStatus, score, setScore } =
    useContext(GameContext);

  const restart = () => {
    setScore(0);
    setGameStatus("start");
  };
  return (
    <div className="maxim">
      <p className="score">
        Твій результат:
        {score}
      </p>
      <button onClick={restart} type="button" className="vetal">
        Перепройти тест
      </button>
    </div>
  );
}
