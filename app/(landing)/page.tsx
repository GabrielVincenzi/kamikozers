'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);  // Initialize the count state
  const [isLimited, setIsLimited] = useState<boolean>(true); // State to toggle limits

  const updateCount = (value: number) => {
    let newCount = count + value;  // Add the new value to the current count

    // Only apply limits if isLimited is true
    if (isLimited) {
      // Wrap-around logic: similar to the Python logic provided
      if (newCount > 8) {
        newCount = -7 + (newCount - 9);
      } else if (newCount < -7) {
        newCount = 8 + (newCount + 8);
      }
    }

    setCount(newCount);  // Update the count state
  };

  const handleLimitToggle = () => {
    setIsLimited(!isLimited);  // Toggle the isLimited state
  };

  // Modified handleButtonClick to accept a value
  const handleButtonClick = (value: number) => {
    updateCount(value);  // Update count by the passed value
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-10 bg-amber-200">
      <h1 className="text-black text-center text-5xl mb-8 font-extrabold">KamiKozers</h1>
      <div className="bg-white w-56 h-56 text-center items-center justify-center flex text-9xl text-black rounded-xl">{count}</div>
      <div className="flex justify-between space-x-4 w-full lg:px-4 mt-10 md:w-3/4 lg:w-1/2">
        <Button className="w-16 h-16" onClick={() => handleButtonClick(1)} variant="one">+1</Button>
        <Button className="w-16 h-16" onClick={() => handleButtonClick(2)} variant="two">+2</Button>
        <Button className="w-16 h-16" onClick={() => handleButtonClick(3)} variant="three">+3</Button>
        <Button className="w-16 h-16" onClick={() => handleButtonClick(5)} variant="five">+5</Button>
      </div>
      <div className="flex justify-between space-x-4 w-full lg:px-4 mt-4 md:w-3/4 lg:w-1/2">
        <Button className="w-16 h-16" onClick={() => handleButtonClick(-1)} variant="onem">-1</Button>
        <Button className="w-16 h-16" onClick={() => handleButtonClick(-2)} variant="twom">-2</Button>
        <Button className="w-16 h-16" onClick={() => handleButtonClick(-3)} variant="threem">-3</Button>
        <Button className="w-16 h-16" onClick={() => handleButtonClick(-5)} variant="fivem">-5</Button>
      </div>
      <div className="flex justify-center items-center space-x-4 w-full lg:px-4 mt-4 md:w-3/4 lg:w-1/2">
        <Button className="w-64 h-16" onClick={handleLimitToggle} variant="default">
          {isLimited ? 'No Limits' : 'Circle'}
        </Button>
      </div>
    </div>
  );
}
