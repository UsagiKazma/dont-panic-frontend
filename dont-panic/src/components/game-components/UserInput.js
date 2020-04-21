import React from 'react'

export default function UserInput({score}) {
    console.log("playerScore", score)
    return (
        <div>
            <h1>TIME TO JOIN A GA CODECAMP</h1>
            <p>{score}</p>
        </div>
    )
}
