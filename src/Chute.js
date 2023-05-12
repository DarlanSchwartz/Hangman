import { useState } from "react";

export default function Chute(props)
{
    const [guessWord,setGuessWord] = useState('');
    
    function hasEndedGame()
    {
        if(props.wonGame == true || props.gameState == 6 || props.isGameStarted == false)
        {
            return true;
        }

        return false;
    }

    return(
        <div className="guess-word-container">
            <p>Já sei a palavra!</p>
            {!hasEndedGame() ? <input data-test="guess-input" onChange={(e)=> setGuessWord(e.target.value)} type="text"></input> : <input  disabled data-test="guess-input" onChange={(e)=> setGuessWord(e.target.value)} type="text"></input>}
            {!hasEndedGame() ? <button data-test="guess-button" onClick={() =>props.onChange(guessWord)} >Chutar</button> : <button disabled data-test="guess-button" onClick={() =>props.onChange(guessWord)} >Chutar</button>}
        </div>
    );
}