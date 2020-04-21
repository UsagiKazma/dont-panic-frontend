import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function UserInput({score, handleUser}) {
    const [initials, setInitials] = useState()
    let history = useHistory()
    const handleChange = e => {
        setInitials(e.target.value)
    }
  
    const handleSubmit = e => {
        e.preventDefault()
        handleUser(initials, score)
        console.log("SUBMIT")
        history.push("/scoreboard");
    }

    return (
        <div>
            <h1>TIME TO JOIN A GA CODECAMP</h1>
            <label>ENTER YOUR INITIALS</label>
            <input value = {initials} onChange = {handleChange} placeholder="XXX"/>
            <p>SCORE: {score}</p>
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
}
