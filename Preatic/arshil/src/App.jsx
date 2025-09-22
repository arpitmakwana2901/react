import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Registration from "./components/Registration";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
};

export default App;
