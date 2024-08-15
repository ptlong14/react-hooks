//45 useState
import React, { useState } from 'react'

function HookCounter() {

  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Count(use useState) {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase CNT</button>
    </div>
  )
}

export default HookCounter
