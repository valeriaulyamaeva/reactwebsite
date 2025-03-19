import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainComponent from './MainComponent';
import AboutMeComponent from './AboutMeComponent';
import ServicesComponent from './ServicesComponent';
import WorksComponent from './WorksComponent';
import ContactsComponent from './ContactsComponent';

function App() {
  return (
    <Router>
      <div className="container">
        <input type="checkbox" id="burger-toggle" className="burger-toggle" />
        <label htmlFor="burger-toggle" className="burger-menu">☰</label>

        <aside className="sidebar">
          <div className="logo">Jac.</div>
          <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/about" element={<AboutMeComponent />} />
        <Route path="/services" element={<ServicesComponent />} />
        <Route path="/works" element={<WorksComponent />} />
        <Route path="/contact" element={<ContactsComponent />} />
      </Routes>
        </aside>
        </div>
    </Router>
  );
}

export default App;
