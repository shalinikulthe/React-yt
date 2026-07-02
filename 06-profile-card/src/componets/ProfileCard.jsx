import React from 'react'
import { UserRound ,SquareCheckBig} from "lucide-react";

const ProfileCard = () => {
  return (
    <div className="w-72 h-96 flex items-center justify-center rounded-3xl py-2 -mt-40">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
        />

        <div className="absolute bottom-20 left-12">
          <h1 className="text-2xl font-bold text-white mt-4">
            Sophie Bennett
          </h1>

          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
           
        
        </div>
       <div className="absolute bottom-4 left-4 flex items-center gap-2">
  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
    <UserRound className="text-white w-5 h-5" />
    
  </div>
  <div>
        <span className='text-white '>312</span>
    </div>
   <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <SquareCheckBig  className="text-white w-5 h-5" />
          </div>

          <span className="text-white">48</span>
        </div>
        <div className='absolute bottom-4 right-14 flext items-center w-10 h-10'>
        <button className='text-white  px-4 py-2 font-bold bg-black rounded-3xl'>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard
