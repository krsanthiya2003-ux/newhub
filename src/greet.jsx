import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = () => {
    setBgColor(bgColor === "white" ? "lightblue" : "white");
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
       <button onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}

export default App;<
