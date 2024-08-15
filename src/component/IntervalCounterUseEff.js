import React, { useEffect, useState } from 'react'

function IntervalCounterUseEff() {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(prevCount=>prevCount + 1)
    }

    
    useEffect(()=>{
       const interval= setInterval(tick, 1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
    
    useEffect(()=>{
        function doSomething() {
            console.log(count)
        }
        doSomething()
    }, [count])
    return (
        <div>
            <h1>Hook: {count}</h1>
        </div>
    )
}

export default IntervalCounterUseEff
