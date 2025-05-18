import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Founder from "./components/Founder/Founder";
import Alumni from "./components/Alumni/Alumni";
import Research from "./components/Research/Research"; 
import Projects from "./components/Projects/Projects";
import Courses from "./components/Courses/Courses";
import Tools from "./components/Tools/Tools"; 
import OpenPositions from "./components/OpenPositions/OpenPositions";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme; // Apply theme class to body for global styles
  }, [theme]);

  return (
    <Router>
      <div className={`App ${theme}`}> {/* Apply theme class to the main App div */}
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/founder" element={<Founder />} /> 
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/research" element={<Research />} /> 
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tools" element={<Tools />} /> {/* Add Tools route */}
          <Route path="/positions" element={<OpenPositions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
