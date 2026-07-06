import React, { useState } from 'react'

const App = () => {

  const [num,SetNum] = useState([10,20,30,40])
  const [info,SetInfo] = useState({username:"Shalini", age:20})
  const [number,SetNumber] = useState(20)

  const btnCliked = ()=>
  {
    const newNum = [...num]
    newNum.push(99)
    SetNum(newNum)

  }
  const btnClick =()=>
  {
    SetInfo(prev=>(({...prev,age:21})))
    
  }
  //Batch update
  const btnUpdate=()=>
  {
     SetNumber(prev=>(prev+1))
      SetNumber(prev=>(prev+1))
       SetNumber(prev=>(prev+1))
  }
  return (
    <div>
      <div>
      <h1>{num}</h1>
      <button onClick={btnCliked}>Click</button>
      </div>
      <div>
        <h1>{info.username} ,{info.age}</h1>
        <button onClick={btnClick}>Click</button>
      </div>
      <div>
        <h1>{number}</h1>
        <button onClick={btnUpdate}>Click</button>
      </div>
    </div>
  )
}

export default App
