import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Update from "./components/Update";
import Read from "./components/Read";
import Home from "./components/Home";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/read/:id" element={<Read />} />
        </Routes>
      
    </>
  );
};

export default App;
