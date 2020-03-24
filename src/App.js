import React from "react";

function App() {
  return (
    <div
      class="flex justify-center bg-local h-screen bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage: `url(${require("./iran.png")})`
      }}
    >
      <div className="w-full max-w-md"></div>
    </div>
  );
}

export default App;
