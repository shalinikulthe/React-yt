import React, { useEffect, useState } from 'react'

const App = () => {

  const[count,SetCount] = useState(0)
 
  const Increase = ()=>
  {
    SetCount(count+1)

  }
  useEffect(()=>
  {
    console.log("Useeffect is running..") 
  },[count])
// will run with count change, bz of [] will run only once. now [count]is its dependency
  return (
    <div>
     <h1> {count}</h1>
      <button onClick={Increase}>Increase</button>
    </div>
  )
}

export default App
