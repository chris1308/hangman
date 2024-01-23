import { useCallback, useEffect, useState } from 'react'
import words from "./wordList.json"
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { Keyboard } from './Keyboard';

function App() {
  // const [count, setCount] = useState(0)
  function getWord() {
    return words[Math.floor(Math.random() * words.length)]
  }
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedWords, setGuessedWords] = useState<string[]>([]);
  // console.log(wordToGuess)
  const incorrectLetters = guessedWords.filter(letter => !wordToGuess.includes(letter))
  const isLose = incorrectLetters.length>=6;
  //isWin will return true if all word to guess included in guessed words array
  const isWin = wordToGuess.split("").every(letter=>guessedWords.includes(letter));
  const addGuessedLetter = useCallback((letter:string)=>{
    if(guessedWords.includes(letter) || isWin || isLose) return 

    setGuessedWords(currentGuessed => [...currentGuessed,letter])
  },[guessedWords, isWin, isLose])

  useEffect(()=>{
    const handler = (e:KeyboardEvent)=>{
      const key = e.key;
      if(!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener('keypress',handler)
    return ()=>{
      document.removeEventListener('keypress',handler)
    }
  },[guessedWords])

  useEffect(()=>{
    const handler = (e:KeyboardEvent)=>{
      const key = e.key;
      if(key != "Enter") return
      e.preventDefault();
      setGuessedWords([])
      setWordToGuess(getWord())
    }

    document.addEventListener('keypress',handler)
    return ()=>{
      document.removeEventListener('keypress',handler)
    } 
  })

  return (
    <div style={{ maxWidth:"800px", display:"flex", flexDirection:"column",gap:"2rem", margin: "0 auto", alignItems:"center" }}>
      <div style={{ fontSize:"2rem", textAlign:"center" }}>
        {isWin && "Congratulations, You win the game! Refresh to retry"}
        {isLose && "You Lose! Refresh to try again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLose} guessedLetters={guessedWords} wordToGuess={wordToGuess} />
      <div style={{ alignSelf:"stretch" }}>
        <Keyboard disabled={isWin || isLose} addGuessedLetter={addGuessedLetter} inactiveLetter={incorrectLetters} 
          activeLetter={guessedWords.filter(letter=> (
            wordToGuess.includes(letter)
          ))}
        />
      </div>
    </div>
  )
}

export default App
