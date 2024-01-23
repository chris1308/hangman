type HangmanWordProp = {
    guessedLetters : string[],
    wordToGuess : string,
    reveal? :boolean
}
export function HangmanWord({reveal =false, guessedLetters,wordToGuess} : HangmanWordProp){
    // const word = "test"
    // const guessedLetter = [""]
    return (
        <div style={{ 
            display:"flex",
            gap : ".25em",
            fontFamily : "monospace",
            fontSize : "6rem",
            fontWeight:"bold",
            textTransform : "uppercase",

         }}>
            {wordToGuess.split("").map((letter,index)=>(
                <span style={{ borderBottom:".1em solid black" }} key={index}>
                    <span style={{ visibility: guessedLetters.includes(letter) || reveal? "visible" : "hidden", color: !guessedLetters.includes(letter) &&  reveal? "red" : "black" }}>
                        {letter}
                    </span>
                </span>
            ))}
         </div>
    )
}