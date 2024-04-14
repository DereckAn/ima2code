"use client";
import { useState, useEffect } from "react";
import { INITIAL_WORDS } from "./words";

const TypinGame = () => {
    const INITIAL_TIME = 30;
    const [words, setWords] = useState<string[]>([]);
    const [currentTime, setCurrentTime] = useState<number>(INITIAL_TIME);
    const [playing, setPlaying] = useState<boolean>(false);
    const [wpm, setWpm] = useState<number>(0);
    const [accuracy, setAccuracy] = useState<number>(0);
  
    useEffect(() => {
      initGame();
    }, []);
  
    const initGame = () => {
      setPlaying(false);
      const shuffledWords = INITIAL_WORDS.sort(() => Math.random() - 0.5).slice(0, 50);
      setWords(shuffledWords);
      setCurrentTime(INITIAL_TIME);
    };
  

  const initEvents = () => {};


  
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Aquí irá la lógica para manejar la entrada del usuario
  };


  return (
    <section className="font-mono h-screen grid place-content-center border-2">
      <h1 className="text-3xl">Type clone Game </h1>
      hola perro
      <time className="">{currentTime}</time>
      {/* <p className="hola" dangerouslySetInnerHTML={{ __html: text }}></p> */}




      <p>
          {words.map((word, index) => (
            <span key={index}>
              {word.split('').map((letter, i) => (
                <span key={i}>{letter}</span>
              ))}
            </span>
          ))}
        </p>



      <input
        className=""
        autoFocus
        // value={inputValue}
        onChange={handleInput}
      ></input>
    </section>
  );
};

export default TypinGame;
