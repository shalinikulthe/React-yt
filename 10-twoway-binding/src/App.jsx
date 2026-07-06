import React from 'react'
import { useState } from 'react'

const App = () => {

  const[name,SetName] = useState('')
 
  const submitHandler=(e)=>
  {
    e.preventDefault()
    
    console.log("Submitted..",name)
    SetName('');
    
  }

  return (
    <div>
      <form onSubmit={(e)=>
        {
          submitHandler(e)
        }
      }>
        <input type='text' placeholder='Enter Your Name ' value={name}
        onChange={(e)=>
        {
          SetName(e.target.value);
        }
        }
        ></input>
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
