//48 useState with array
import React, { useState } from 'react'

function HookCounter48() {
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }
  return (
    <div>
      <h2>useState with arr</h2>
      <button onClick={addItem}>Add a new number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>id: {item.id} with value: {item.value}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default HookCounter48
