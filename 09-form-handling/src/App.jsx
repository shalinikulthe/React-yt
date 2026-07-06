import React from 'react'

const App = () => {

  const submitHandler = (e)=>
  {
    e.preventDefault()
    console.log("Submitted..")

  }
  return (
    <div>
      //so that form will not reload,to prevent default it
      <form onSubmit={(e)=>
        {
          submitHandler(e)
        }
      }>
        <input type='text' placeholder='Enter Your Name'></input>
        <button>Submit</button>
       
      </form>
      
    </div>
  )
}

export default App
