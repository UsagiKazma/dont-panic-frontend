import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { createUser } from '../../game-utility/api-helper'

export default function UserInput({score}) {
    const [initials, setInitials] = useState('');
    const [user, setUser] = useState({ user: "", score: 0});
    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault()
        
        console.log("HANDLE SUBMIT", initials, score)
        console.log("SUBMIT")

        setUser({initials, score});
        console.log("USER", user)
        history.push("/scoreboard");
    }

    console.log(initials)
    return (
        <div>
            <h1>TIME TO JOIN A GA CODECAMP</h1>
            <label>ENTER YOUR INITIALS</label>
            <input value = {initials} onChange={e => setInitials(e.target.value)} placeholder="XXX"/>
            <p>SCORE: {score}</p>
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
}
