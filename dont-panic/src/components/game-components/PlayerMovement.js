import React from 'react'

export default function PlayerMovement({percent}) {
    return (
        <div className="player-movement-container">
            <div className="player-grid" style={{width: `${percent}%`}}>
                <i class="fad fa-ufo"></i>
            </div>
        </div>
    )
}
