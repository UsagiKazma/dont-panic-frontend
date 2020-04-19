import React from 'react'
import Game from "./game-components/Game"
import "../App.scss"
function Canvas() {
    return (
        <div>
            <h1>Canvas Component</h1>
            <div className="canvas">
                <Game />
            </div>
        </div>
    )
}

export default Canvas
