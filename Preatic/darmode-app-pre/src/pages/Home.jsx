import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Section from "../component/Section";
import Footer from "../component/Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Section darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
};

export default Home;
