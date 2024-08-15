//46 useState with prevState
import React, { useState } from 'react'

function HookCounter46() {
    const initCount = 0
    const [count, setCount] = useState(initCount)

    // const incrementFive = () => {
    //     for (let i = 0; i < 5; i++) {
    //         setCount(prevCount => prevCount + 1)
    //     }
    // }
    return (
        <div>
            <h1>Count( useState with prevState) : {count}</h1>
            <button onClick={() => setCount(initCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button>
            {/* <button onClick={incrementFive}>Increment 5</button> */}
        </div>
    )
}

export default HookCounter46
