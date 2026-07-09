import React from 'react'

const App = () => {
  //localStorage.clear() to clear
  // const user = localStorage.setItem('age','18')  //to setvalue in local storage
  // const user1 = localStorage.getItem('age') //to get storedvalue
  // console.log(user1)
  // const user2 = localStorage.removeItem('age') // to remove stored item
  //   console.log(user2)
   
  const user3 ={
    name:'shalini',
    age: '18'
  }
  const user4 = JSON.parse(localStorage.getItem('user4'))
  console.log(user4)
  
  // console.log(user3) // we will get obj 
  // console.log(JSON.stringify(user3)) will get {"name":"shalini","age":"18"}
//  if we want JSON string into a JavaScript object or array.





  return (
    <div>
    
    </div>
  )
}

export default App
