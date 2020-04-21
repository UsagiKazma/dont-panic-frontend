import React, {useState, useEffect} from 'react'
import Game from "./game-components/Game"
import "../App.scss"
import {getAllWords} from "../game-utility/api-helper"


function Canvas() {
    const [wordsArr, setWordsArr] = useState('')
    useEffect(() => {
      const makeAPICall = async () => {
        const resp =  await getAllWords()
        setWordsArr(resp) 
      }
      makeAPICall()
    }, [])
    
    
    return (
        <div>
                <div className="canvas">
                    <Game wordsArr={wordsArr}/>
                </div>
            
        </div>
    )
}

export default Canvas
