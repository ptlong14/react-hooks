//64
import React, { useReducer } from 'react'

//step 2:
const initState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'Increase':
            return state + 1
        case 'Decrease':
            return state - 1
        case 'Reset':
            return initState
        default:
            return state
    }
}

function CounterMultiReducer() {
    //step 1:
    const [count, dispatch] = useReducer(reducer, initState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initState)
    return (
        <div>
            <hr></hr>
            <h1>CounterOne(Multiple useReducer): {count}</h1>
            <button onClick={() => dispatch('Reset')} >Reset</button>
            <button onClick={() => dispatch('Increase')}>Increase</button>
            <button onClick={() => dispatch('Decrease')}>Decrease</button>

            <h1>CounterTwo(Multiple useReducer): {countTwo}</h1>
            <button onClick={() => dispatchTwo('Reset')} >Reset</button>
            <button onClick={() => dispatchTwo('Increase')}>Increase</button>
            <button onClick={() => dispatchTwo('Decrease')}>Decrease</button>

        </div>
    )
}

export default CounterMultiReducer
