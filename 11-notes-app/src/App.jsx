import React, { useState } from 'react'


const App = () => {
  const[title,SetTitle] = useState('')
  const[details,SetDetails] =useState('')
  const[task,SetTask] = useState([])

  const submitHandler =(e)=>
  {
    e.preventDefault()
    const copyTask=[...task]
    copyTask.push({title,details})
    SetTask(copyTask)
  
    console.log("Submitted..", task,title,details)
    SetTitle('')
    SetDetails('')
  }

  const deleteNote =(idx)=>
  {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    SetTask(copyTask)

  }
  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form onSubmit={(e)=>
        {
          submitHandler(e)
        }
      } className='flex lg:w-1/2   gap-4 w-1/2 items-start flex-col p-10'>
          <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input type='text'  placeholder='Enter Notes Heading'  value={title} onChange={(e)=> SetTitle(e.target.value)} className='px-5 w-full py-2 border-2 outline-none rounded font-medium'>
        </input>
        <textarea type='text' placeholder='Write Details here' value={details} onChange={(e)=>SetDetails(e.target.value)}  className='px-5 w-full font-medium h-32  py-2 flex items-start flex-row border-2 outline-none rounded'></textarea>
        <button className='bg-white font-medium active:scale-95  w-full outline-none text-black px-5 py-2'>Add Notes</button>
      </form>
      <div className=' p-10 lg:border-l-2  lg:w-1/2'>
         <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex items-start justify-start flex-wrap gap-4 mt-5 overflow-auto h-[90%]'>
         {task.map(function( elem,idx)
         {
          return <div key={idx} className=' relative flex justify-between flex-col items-start h-52 w-40 rounded-2xl  bg-cover text-black bg-[url("https://www.nicepng.com/png/full/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png")] pt-9 pb-4 px-4 '>
            <div>
           <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight font-semibold text-xs text-gray-00'>{elem.details}</p>
          </div>
          <button onClick={()=>{deleteNote(idx)}} className='w-full cursor-pointer active:scale-95 py-1 text-xs rounded font-bold bg-red-600 text-white '>Delete</button>
          </div>
          
         })} 
       
        </div>
      </div>
        </div>
  
    
  )
}

export default App
