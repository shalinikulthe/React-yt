import React from 'react'

const ProfileCard2 = () => {
  return (
    <div className='bg-white min-h-[370px] w-2xs rounded-3xl'>
        <div className='relative'>
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" className='h-30 w-xs rounded-4xl mt-2 px-2.5 object-cover'></img>
        <button className="absolute top-3 right-4 bg-white px-3 py-1 rounded-full text-sm ">
          Follow +
        </button>
        <img src="https://images.unsplash.com/vector-1756860574511-a09ea14b6ef5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGhlYWRzaG90fGVufDB8fDB8fHww" className='h-20 rounded-full absolute left-6 top-20'></img>
        </div>
        <div className='py-12 px-5 pb-5'>
            <h1 className='flex items-center font-bold'>Emma Watson</h1>
            <p className='font-light text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex justify-around text-center">
  <div>
    <p className='font-bold'>77.2k</p>
    <span className='text-gray-400'>Likes</span>
    <img src="https://cdn.simpleicons.org/instagram" className='h-4 mt-5 px-4'></img>
  </div>
  <div>
    <p className='font-bold'>72.2k</p>
    <span  className='text-gray-400'>Posts</span>
    <img src="https://cdn.simpleicons.org/x" className='h-4 mt-5 px-4'></img>
  </div>

  <div>
    <p className=' font-bold'>277.2k</p>
    <span  className='text-gray-400'>Views</span>
    <img src="https://cdn.simpleicons.org/threads"className='h-4 mt-5 px-4'></img>
    
  </div>
</div>

        
    
    </div>
  )
}

export default ProfileCard2
