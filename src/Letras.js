const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


export default function Letras(props)
{
    if((props.gameState == 0 && props.isGameStarted == false ) || props.gameState == 6 || props.wonGame == true)
    {
        return (

            <div className="letters-container">
                {alfabeto.map((c)=> Letra(c,true,() =>props.onChange(c)))}
            </div>
    
        );
    }
    
    return (

        <div className="letters-container">
            {alfabeto.map((c)=> Letra(c,props.guessedLettersArr.includes(c),() =>props.onChange(c)))}
        </div>

    );
}


function Letra(char,isDisabled,callback)
{
    if(isDisabled)
    {
            return (<button key={char} disabled className="letter-btn">{char.toUpperCase()}</button>);
    }

   return (<button onClick={()=>callback()}  key={char} className="letter-btn">{char.toUpperCase()}</button>);
}