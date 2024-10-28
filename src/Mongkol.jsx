import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './Mongkol.css';
import Homepage from './Homepage';
import '@fontsource/cinzel-decorative';

const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="logo">M<img src="/Pictures/sparkling.png" alt="Sparkling" width="100px" height="100" />ngkol</h1>
        <Link to="/Homepage">
          <button>เข้าสู่เว็บไซต์ <span>&#9654;</span></button>
        </Link>
      </div>
      <div>
        <div className="flower-bottom-left"></div>
        <div className="flower-top-right"></div>
      </div>
    </>
  );
}

const Mongkol = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Homepage" element={<Homepage />} />
  </Routes>
);

export default Mongkol;
