import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount(count + 1);
  }
  console.log("rendering...");

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleInc}>Deoposit</button>
        <button
          disabled={count === 0}
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Withdraw
        </button>
      </div>
    </>
  );
};

export default App;
