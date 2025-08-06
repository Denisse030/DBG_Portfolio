'use client';
import { useEffect, useState } from 'react';

export default function PortfolioHeader() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentTime(timeString);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-between items-center px-6 py-3 bg-green-100">
      <h1 className="text-2xl font-bold">Welcome to my Portfolio!</h1>
      <h1><span className="text-2xl font-bold">{currentTime}</span></h1>
    </div>
  );
}
