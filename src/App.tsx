
import { useState } from 'react'
import HangmanDrawing from './HangmanComponents/HangmanDrawing'
import HangmanWord from './HangmanComponents/HangmanWord'
import Keyboard from './HangmanComponents/Keyboard'
import Lesson from './page/Lesson'
import words from './worldList.json'
function App() {

  const [wordToGuess,setWordToGuess]=useState<string>(()=>{
    return words[Math.floor(Math.random()*words.length)]
  })

  console.log(wordToGuess)

  const [guessedLetter,setGussedLetter]=useState<string []>([])


  const incorrectLetters = guessedLetter.filter(letter=> !wordToGuess.includes(letter))

  return (
    <>
     
      <div
      style={
        {
          maxWidth:"800px",
          display:"flex",
          flexDirection:"column",
          gap:"2rem",
          margin:"0 auto",
          alignItems:"center"
        }

      }
      >
          <div style={{fontSize:"2rem",textAlign:"center"}}>Loss or Win</div>
          <HangmanDrawing  numberOfGuesses={incorrectLetters.length}/>
          <HangmanWord/>
          <div style={{alignSelf:"stretch"}}>
          <Keyboard/>
          </div>
         
      </div>
    </>
  )
}

export default App
