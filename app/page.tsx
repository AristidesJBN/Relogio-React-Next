"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondAngle = seconds * 6; 
  const minuteAngle = minutes * 6;
  const hourAngle = hours * 30 + minutes * 0.5; 

  return (
    <main className="flex items-center justify-center h-screen bg-gray-200">
      <div className="relative w-88 h-88 bg-white rounded-full border-4 border-black flex items-center justify-center">

      {Array.from({ length: 12 }).map((_, i) => {
          const number = i + 1;
          const angle = number * 30;

          return (
            <div
              key={number}
              className="absolute text-lg font-bold text-black"
              style={{
                transform: `rotate(${angle}deg) translateY(-150px) rotate(-${angle}deg)`,
              }}
            >
              {number}
            </div>
          );
        })}

        <div
          className="absolute w-2 h-18 bg-black origin-bottom"
          style={{
            bottom: "50%",
            transform: `rotate(${hourAngle}deg)`
          }}
        />

        <div
          className="absolute w-1.5 h-26 bg-black origin-bottom"
          style={{
            bottom: "50%",
            transform: `rotate(${minuteAngle}deg)`
          }}
        />

        <div
          className="absolute w-1 h-30 bg-red-500 origin-bottom"
          style={{
            bottom: "50%",
            transform: `rotate(${secondAngle}deg)`
          }}
        />

        <div className="w-4 h-4 bg-black rounded-full z-10" />
      </div>
    </main>
  );
}