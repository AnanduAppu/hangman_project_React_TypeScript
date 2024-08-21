import React from 'react'

function HangmanWord() {


    const word = 'test'
    const gussedLetters:string[] = ['t','e','g']

  return (
    <div
    style={{
        display:"flex",
        gap:".25rem",
        fontSize:"5rem",
        fontWeight:"bold",
        textTransform:"uppercase",
        fontFamily:"monospace"
    }}>
        {word.split('').map((letter,index)=>(
            <span style={{borderBottom:".1rem solid black"}}>
            <span 
            style={{
                visibility:gussedLetters.includes(letter)?'visible':'hidden'
            }}
            >

            {letter}
            </span>
        </span>
        ) )}
    </div>
  )
}

export default HangmanWord