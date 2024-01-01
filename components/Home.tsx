"use client";
import React, { useState } from "react";

function Home() {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter((counter) => {
      if (counter === 10) {
        return 0;
      }
      return counter + 1;
    });
  };
  const handleDecrement = () => {
    setCounter((counter) => {
      if (counter > 0) {
        return counter - 1;
      }
      return counter;
    });
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div className="flex justify-center items-center border border-6 flex-col-reverse">
      <div className="font-bold">Nabil@X!</div>
      <div className="p-6">
        <button
          onClick={handleIncrement}
          className="w-12 h-6 rounded-md mr-4 bg-green-500 hover:bg-green-800"
        >
          Up
        </button>
        <button
          onClick={handleDecrement}
          className="w-12 h-6 rounded-md mr-4 bg-blue-500 hover:bg-blue-800"
        >
          Down
        </button>
        <button
          onClick={handleReset}
          className="w-12 h-6 rounded-md bg-red-500 hover:bg-red-800"
        >
          Reset
        </button>
      </div>
      <div className="mt-5 p-2 font-bold border rounded-md bg-slate-100 text-black">
        {counter}
      </div>
      <>{counter}/10</>
      {counter === 0 && <div className="p-2 text-red-600 font-bold">Poor!</div>}
      {counter >= 1 && counter < 5 && <div className="p-2 text-yellow-400 font-bold">Keep going!</div>}
      {counter >= 5 && counter < 7 && <div className="p-2 text-green-300 font-bold">Very close!</div>}
      {counter >= 7 && counter < 10 && <div className="p-2 text-blue-600 font-bold">Excellent!</div>}
      {counter === 10 && <div className="p-2 text-green-600 font-bold">Well done!</div>}
    </div>
  );
}

export default Home;
