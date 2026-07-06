import React, { useState } from 'react'

const Counter = () => {
  const [num, SetNum] = useState(0);

  const Increment = () => {
    SetNum(num + 1);
  };

  const Decrement = () => {
    SetNum(num - 1);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white w-80 p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Counter App
        </h1>

        <h2 className="text-6xl font-bold text-blue-600 mb-8">
          {num}
        </h2>

        <div className="flex justify-center gap-4">
          <button
            onClick={Decrement}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
          >
            Decrease
          </button>

          <button
            onClick={Increment}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter
