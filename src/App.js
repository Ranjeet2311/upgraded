import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/pages/Home';
import Experience from './component/pages/Experience';
import TechStack from './component/pages/TechStack';
import Projects from './component/pages/Projects';
import Navbar from './component/navbar/Navbar';

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/upgraded">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
