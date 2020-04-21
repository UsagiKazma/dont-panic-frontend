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
        console.log('useEffect - resp', resp)
      }
      makeAPICall()
    }, [])
    console.log('useME2020 - resp', wordsArr)
    
    return (
        <div>
                <div className="canvas">
                    <Game wordsArr={wordsArr}/>
                </div>
            
        </div>
    )
}

export default Canvas
