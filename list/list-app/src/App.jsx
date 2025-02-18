import React, { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);

  function handleList() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
      });
  }

  return (
    <>
      <div>
        <button onClick={handleList}>Show Data</button>
        <div>
          {list.map((data) => (
            <div key={data.id}>
              <h2>{data.url}</h2>
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
