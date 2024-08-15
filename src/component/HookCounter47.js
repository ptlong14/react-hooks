//47 useState with obj
import React, { useState } from 'react'

function HookCounter47() {

    const [name, setName] = useState({ firstName: '', lastName: '' })

    const resetName = () => {
        setName({ firstName: '', lastName: '' })
    }
    return (
        <form>
            <h2>useState with Obj</h2>
            firstName:
            <input type="text" value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })}>
            </input>

            lastName:
            <input type='text' value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}>
            </input>

            <button onClick={resetName}>Reset</button>
            <h2>Your fName is {name.firstName}</h2>
            <h2>Your lName is {name.lastName}</h2>
        </form>
    )
}

export default HookCounter47
