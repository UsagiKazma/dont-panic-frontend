import React, {useState, useEffect} from 'react'
import Game from "./game-components/Game"
import "../App.scss"
import {getAllWords} from "../game-utility/api-helper"
import UserInput from "../components/game-components/UserInput"

function Canvas() {
    const [wordsArr, setWordsArr] = useState('')
    const [lost, setLost] = useState(false)
    const [score, setScore] = useState(0)
    const [user, setUser] = useState({'user': 'score'})
    useEffect(() => {
      const makeAPICall = async () => {
        const resp =  await getAllWords()
        setWordsArr(resp) 
      }
      makeAPICall()
    }, [])
    const handleScore = (score) => {
      setScore(score)
    }
    const handleLost = () => {
      setLost(!lost)
    }
    const handleUser = (initials, score) => {
      setUser({initials, score})
    }
    console.log("handleScore -> score", score)
    return (
        <div>
                <div className="canvas">
                    {lost===false && <Game wordsArr={wordsArr} handleScore={handleScore} handleLost={handleLost}/>}
                    {lost===true && <UserInput score={score} handleUser={handleUser}/>}
                </div>
            
        </div>
    )
    }

export default Canvas
