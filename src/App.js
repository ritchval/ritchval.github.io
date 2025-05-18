import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Alumni from "./components/Alumni/Alumni";
import Publications from "./components/Publications/Publications";
import Projects from "./components/Projects/Projects";
import Courses from "./components/Courses/Courses";
import OpenPositions from "./components/OpenPositions/OpenPositions";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/positions" element={<OpenPositions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
