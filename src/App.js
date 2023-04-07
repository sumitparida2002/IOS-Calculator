import React, { useState } from 'react'

import NumPad from './components/NumPad'
import View from './components/View'
import { calculate } from './logic/calculate'

const App = () => {
  const [total, setTotal] = useState(null)
  const [next, setNext] = useState(null)
  const [operation, setOperation] = useState(null)

  const handleClick=(btnName)=>{
    calculate(btnName,total,setTotal,next,setNext,operation,setOperation)
  }
  return (
    <div>
        <View value={total || next || "0"}/>
        <NumPad handleClick={handleClick} />
    </div>
  )
}

export default App