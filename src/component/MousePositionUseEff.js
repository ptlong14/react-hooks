//52-53
import React, { useEffect, useState } from 'react'

function MousePositionUseEff() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const logMousePosition = e => {
        console.log("Mouse event")
        setPosition({ x: e.clientX, y: e.clientY })
    }
    useEffect(() => {
        console.log("useEffect is called")
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log("Cleaned eff, Comp unmounted")
            window.removeEventListener("mousemove", logMousePosition)
        }
    }, [])
    return (
        <div>
            Hooks: X- {position.x} Y- {position.y}
        </div>
    )
}

export default MousePositionUseEff
