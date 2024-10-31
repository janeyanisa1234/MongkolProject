import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './Mongkol.css';
import Homepage from './Homepage';
import Monday from './Monday';
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";
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
};

const Mongkol = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Homepage" element={<Homepage />} />
    <Route path="/Monday" element={<Monday />} />
    <Route path="/Tuesday" element={<Tuesday />} />
    <Route path="/Wednesday" element={<Wednesday />} />
    <Route path="/Thursday" element={<Thursday />} />
    <Route path="/Friday" element={<Friday />} />
    <Route path="/Saturday" element={<Saturday />} />
    <Route path="/Sunday" element={<Sunday />} />
  </Routes>
);

export default Mongkol;
