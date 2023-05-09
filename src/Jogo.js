import { useState } from "react";
import palavras from "./palavras";
import StartGame from "./App";

export default function Jogo(props)
{
    let currentWordClass = "current-word";
    
    if(props.gameState == 6)
    {
        currentWordClass = "current-word red-word";
    }

    if(props.wonGame == true)
    {
        currentWordClass = "current-word green-word";
    }

    return (
        <div className="game">
            <img data-test="game-image" src={`./assets/img/forca${props.gameState}.png`}/>
            <button onClick={()=> props.onChange()} data-test="choose-word" className="choose-word-btn" >Escolher Palavra</button>
            <div data-test="word" className={currentWordClass}>{props.currentWord}</div>
        </div>
    );
}