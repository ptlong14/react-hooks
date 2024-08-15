//52-53
import React, { useState } from 'react'
import MousePositionUseEff from './MousePositionUseEff'

function MouseContainer() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>
                Toggle Display
            </button>
            {display && <MousePositionUseEff />}
        </div>
    )
}

export default MouseContainer
