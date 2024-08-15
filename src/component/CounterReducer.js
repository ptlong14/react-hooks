//62
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

function CounterReducer() {
    //step 1:
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <hr></hr>
            <h1>Count(useReducer): {count}</h1>
            <button onClick={() => dispatch('Reset')} >Reset</button>
            <button onClick={() => dispatch('Increase')}>Increase</button>
            <button onClick={() => dispatch('Decrease')}>Decrease</button>
        </div>
    )
}

export default CounterReducer
