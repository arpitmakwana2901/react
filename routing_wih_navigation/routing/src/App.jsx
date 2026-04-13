import React from "react";
import { Route, Routes } from "react-router-dom";
import "../src/index.css" 
import "../src/app.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LearnMore from "./components/LearnMore";
import OurFeatures from "./pages/OurFeatures";
import ShowProducts from "./pages/ShowProducts";
import Welcome from "./components/Welcome";
import Addpro from "./components/Addpro";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/learnmore" element={<LearnMore />} />
                <Route path="/features" element={<OurFeatures />} />
                <Route path="/showproducts" element={<ShowProducts />} />
                <Route path="/addpro/:id" element={<Addpro />} />
            </Routes>
        </div>
    );
};

export default App;
