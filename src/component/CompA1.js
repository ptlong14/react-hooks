//65
import React, { useContext } from 'react'
import { CountContext } from '../App'
function CompA1() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Comp A1: {countContext.countState}
            <button onClick={() => countContext.countDispatch('Reset')} >Reset</button>
            <button onClick={() => countContext.countDispatch('Increase')}>Increase</button>
            <button onClick={() => countContext.countDispatch('Decrease')}>Decrease</button>
        </div>
    )
}

export default CompA1