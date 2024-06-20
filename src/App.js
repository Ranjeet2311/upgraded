import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import TechStack from './pages/TechStack';
import Projects from './pages/Projects';
import Navbar from './component/Navbar';
import NotFound from './pages/NotFound';
import ProjectDetails from './pages/ProjectDetails';

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
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
