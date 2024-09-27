import { useState, useEffect } from "react";
import { Card } from "./components/card";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [order, setOrder] = useState([
    "dog",
    "cat",
    "horse",
    "lion",
    "tiger",
    "bird",
    "turtle",
    "gorilla",
    "cobra",
    "spider",
    "alligator",
    "giraffe",
  ]);

  // Shuffles the order array
  function reshuffle() {
    console.log("reshuffled");
    setOrder([...order].sort(() => Math.random() - 0.5));
  }
  useEffect(() => {
    if (gameOver) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
    }
  }, [gameOver]);

  function handleScore() {
    setScore(score + 1);
    /* reShuffle(); */
  }

  return (
    <>
      <div className="header">
        <div className="title">
          <div className="header">
            <h1>Amphibia Memory Game</h1>
          </div>
          <div>
            <h5>
              Get points by clicking on a image but don't click on any more than
              once!
            </h5>
          </div>
        </div>
        <div className="score">
          <div><p>Score: {score}</p></div>
          <div><p>Best score: {bestScore}</p></div>
        </div>
      </div>
      <div className="gameContainer">
        {order.map((item) => (
          <Card
            key={item}
            handleScore={handleScore}
            gameOver={gameOver}
            setGameOver={setGameOver}
            reshuffle={reshuffle}
            search={item}
            className={item}
          />
        ))}
      </div>
    </>
  );
}

export default App;
