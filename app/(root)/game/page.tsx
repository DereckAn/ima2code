"use client";
import { useEffect, useState } from "react";
import { INITIAL_WORDS } from "./words";

const TypinGame = () => {
  const INITIAL_TIME = 30;
  const [words, setWords] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState<number>(INITIAL_TIME);
  const [playing, setPlaying] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(0);

  useEffect(() => {
    initGame();
  }, []);

  let timer: NodeJS.Timeout;
  useEffect(() => {
    if (playing && !paused && currentTime > 0) {
      timer = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!playing || paused || currentTime === 0) {
      clearInterval(timer);
      gameOver();
    }
    return () => clearInterval(timer);
  }, [playing, paused, currentTime]);

  const initGame = () => {
    setPlaying(true);
    const shuffledWords = INITIAL_WORDS.sort(() => Math.random() - 0.5).slice(
      0,
      50
    );
    setWords(shuffledWords);
    setCurrentTime(INITIAL_TIME);
  };

  const togglePause = () => {
    setPaused(!paused);
  };

  const gameOver = () => {
    setPlaying(false);
    setPaused(false);
    setWpm(0);
    setAccuracy(0);
    console.log("Game Over");
  };

  const initEvents = () => {};

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Aquí irá la lógica para manejar la entrada del usuario
  };

  return (
    <section className="font-mono h-screen grid place-content-center ">
      <h1 className="text-3xl">Type clone Game </h1>
      <time className="bg-primary text-end font-bold text-3xl px-5 text-yellow-600">
        {currentTime}
      </time>
      <button onClick={togglePause}>{paused ? "Resume" : "Pause"}</button>
      <p
        className="overflow-auto text-center text-gray-600"
        style={{ wordWrap: "break-word" }}
      >
        {words.map((word, index) => (
          <span key={index} id={"word"} className={index === 0 ? "active" : ""}>
            {word.split("").map((letter, i) => (
              <span
                id="letter"
                key={i}
                className={
                  i === 0 && index === 0 ? "active text-yellow-200 " : ""
                }
              >
                {i === 0 && index === 0 ? letter.toUpperCase() : letter}
              </span>
            ))}{" "}
          </span>
        ))}
      </p>
      <input
        className="-z-999 absolute top-0 left-50 "
        autoFocus
        onChange={handleInput}
      ></input>
    </section>
  );
};

export default TypinGame;
