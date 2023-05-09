import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";
import palavras from "./palavras";

export default function App() {
    const [gameStarted, setGameStarted] = useState(false);
    const [currentGameState, setCurrentGameState] = useState(0);
    const [currentGameWord, setCurrentGameWord] = useState('');
    const [guessedLetters, setGuessedLetters] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    const [hasWonGame, setWonGame] = useState(false);


    function StartGame() {

        let palavra = palavras[getRandomInt(0, palavras.length-1)];
        setGameStarted(true);
        setCurrentGameState(0);
        setCurrentGameWord(palavra);
        setGuessedLetters([]);
        setWonGame(false);
        console.log(palavra);
    }

    function addGuessedLetter(char)
    {
        setGuessedLetters([
            ...guessedLetters,char
        ]);

        setCurrentGameState(currentGameState + (currentGameWord.includes(char) ? 0 : 1 ))
    }


    function getCurrentUnderlinedWord() {
        if(currentGameState == 6 || hasWonGame == true)
        {
            return currentGameWord;
        }

        let word = '';

        for (let index = 0; index < currentGameWord.length; index++) {
            word += guessedLetters.includes(currentGameWord[index]) ? currentGameWord[index] : " _";
        }

        if(word == currentGameWord)
        {
            setWonGame(true);
        }

        return word;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className="website">
            <Jogo onChange = {StartGame}  gameState={currentGameState} currentWord={getCurrentUnderlinedWord()} wonGame ={hasWonGame}  />
            <Letras guessedLettersArr = {guessedLetters} onChange = {(char) => addGuessedLetter(char)} gameState={currentGameState} isGameStarted={gameStarted} wonGame = {hasWonGame}/>
        </div>
    );
}
