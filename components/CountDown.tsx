import React, { useEffect, useState } from "react";

interface CountDownProps {
  value: number;
}

function CountDown({ value }: CountDownProps) {
  const [count, setCount] = useState(value);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : count));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2">
      <span className="p-2 rounded-md border border-6 countdown font-mono text-3xl" style={{ "--value": String(count) } as React.CSSProperties}>
        <span></span>
      </span>
    </div>
  );
}

export default CountDown;
