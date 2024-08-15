//63
import React, { useReducer } from 'react'

//step 2:
const initState = {
    FirstCounter: 0,
    SecondCounter: 10,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'Increase1':
            return { ...state, FirstCounter: state.FirstCounter + action.value }
        case 'Decrease1':
            return { ...state, FirstCounter: state.FirstCounter - action.value }
        case 'Increase2':
            return { ...state, SecondCounter: state.SecondCounter + action.value }
        case 'Decrease2':
            return { ...state, SecondCounter: state.SecondCounter - action.value }
        case 'Reset':
            return initState
        default:
            return state
    }
}

function CounterReducerObj() {
    //step 1:
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div>
            <hr />
            <h1>FirstCounter(useReducer with Obj): {count.FirstCounter}</h1>
            <button onClick={() => dispatch({ type: 'Increase1', value: 1 })}>FC Increase +1</button>
            <button onClick={() => dispatch({ type: 'Decrease1', value: 1 })}>FC Decrease +1</button>
            <button onClick={() => dispatch({ type: 'Increase1', value: 5 })}>FC Increase +5</button>
            <button onClick={() => dispatch({ type: 'Decrease1', value: 5 })}>FC Decrease -5</button>

            <br />
            <h1>SecondCounter(useReducer with Obj): {count.SecondCounter}</h1>
            <button onClick={() => dispatch({ type: 'Increase2', value: 1 })}>SC Increase +1</button>
            <button onClick={() => dispatch({ type: 'Decrease2', value: 1 })}>SC Decrease +1</button>
            <button onClick={() => dispatch({ type: 'Increase2', value: 5 })}>SC Increase +5</button>
            <button onClick={() => dispatch({ type: 'Decrease2', value: 5 })}>SC Decrease -5</button>
            <br />
            <br />
            <button onClick={() => dispatch({ type: 'Reset' })} >Both Reset </button>
        </div>
    )
}

export default CounterReducerObj
