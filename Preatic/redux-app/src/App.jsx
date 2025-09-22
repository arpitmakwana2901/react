import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incByAmount, increment } from "./redux/features/counter/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispatch(increment())}>Decrement</button>
        <p>Count:{count}</p>
        <button onClick={()=>dispatch(incByAmount(2))}>IncByAmout</button>
      </div>
    </>
  );
};

export default App;
