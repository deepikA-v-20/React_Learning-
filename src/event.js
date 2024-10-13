import { useState } from "react";

export function App3() {
  const [bgColor, setBgColor] = useState(''); 

  const handleMouseDown = () => {
    setBgColor('lightblue'); 
  };

  const handleMouseUp = () => {
    setBgColor(''); 
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: '100vh', 
        
      }}
    >
      <button
        onMouseDown={handleMouseDown} 
        onMouseUp={handleMouseUp} 
      >
        Change Background
      </button>
    </div>
  );
}
