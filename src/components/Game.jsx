import React, { useState } from "react";
import { useContext } from "react";
import { GameContext } from "../GameContaxt";
import data from "../dat";

export default function Game() {
  const { gameStatus, setGameStatus, score, setScore } =
    useContext(GameContext);
  const [index, setIndex] = useState(0);
  const { id, question, img, variant1, variant2, variant3, variant4, answer } =
    data[index];
  const [userVariant, setUserVariant] = useState("");
  console.log(userVariant);
  console.log(score);
  const next = () => {
    if (userVariant === answer) {
      setScore(score + 1);
    }
    setUserVariant("");
    setIndex(index + 1);
  };
  const finish = () => {
    if (userVariant === answer) {
      setScore(score + 1);
    }
    setUserVariant("");
    setGameStatus("end");
  };
  return (
    <div>
      <h2 className="dima">{question}</h2>
      <img src={img} height={500} />
      <br />
      <button
        onClick={() => setUserVariant("variant1")}
        type="button"
        className={userVariant === "variant1" ? "variant activ" : "variant"}
      >
        {variant1}
      </button>
      <button
        onClick={() => setUserVariant("variant2")}
        type="button"
        className={userVariant === "variant2" ? "variant activ" : "variant"}
      >
        {variant2}
      </button>
      <br />
      <button
        onClick={() => setUserVariant("variant3")}
        type="button"
        className={userVariant === "variant3" ? "variant activ" : "variant"}
      >
        {variant3}
      </button>
      <button
        onClick={() => setUserVariant("variant4")}
        type="button"
        className={userVariant === "variant4" ? "variant activ" : "variant"}
      >
        {variant4}
        <br />
      </button>
      {index !== data.length - 1 ? (
        <button onClick={next} type="button" className="vetal">
          Наступне запитання
        </button>
      ) : (
        <button onClick={finish} type="button" className="vetal">
          Перейти до результатів
        </button>
      )}
    </div>
  );
}
