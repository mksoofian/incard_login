import { useState, useEffect, useRef } from "react";

export function useIdleTimer(timeout: number = 10) {
  const [idleTime, setIdleTime] = useState(0); // Time in seconds
  const lastActiveTime = useRef(Date.now()); // Last user interaction timestamp

  // Function to reset idle timer on any user interaction
  const handleUserInteraction = () => {
    lastActiveTime.current = Date.now();
  };

  // Effect to update idle time and re-run on timeout or component unmount
  useEffect(() => {
    const handleIdle = () => {
      const now = Date.now();
      const elapsedTime = Math.floor((now - lastActiveTime.current) / 1000); // Time in whole seconds
      setIdleTime(elapsedTime);
    };

    const intervalId = setInterval(handleIdle, 1000); // Update timer every second

    // Event listeners to detect user interaction
    window.addEventListener("mousemove", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    // Cleanup function to stop the interval and remove event listeners
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [timeout]); // Re-run effect on timeout change

  return { idleTime, handleUserInteraction };
}
