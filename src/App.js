import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import QRCodeGenerator from './QRCodeGenerator'; // Home page component
import InstructionsPage from './InstructionsPage'; // Instructions page component

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Apply dark mode to body when the state changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className="app-container">
        {/* Persistent Navigation Bar */}
        <header className="top-menu">
          <nav style={{ flex: 1 }}>
            <ul className="menu-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructions"
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  Instructions
                </NavLink>
              </li>
              <li>
                <a href="https://github.com/LuiseFreese/QRWatchface" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
          {/* Dark Mode Toggle - moved to far right */}
          <div className="theme-toggle" style={{ marginLeft: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Sun SVG */}
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? '#ccc' : '#FFA500'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: isDarkMode ? 0.5 : 1, transition: 'opacity 0.2s' }}>
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </span>
              <label className="switch" style={{ margin: '0 4px', verticalAlign: 'middle' }}>
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  aria-label="Toggle dark mode"
                />
                <span className="slider"></span>
              </label>
              {/* Moon SVG */}
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? '#FFD700' : '#ccc'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: isDarkMode ? 1 : 0.5, transition: 'opacity 0.2s' }}>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
                </svg>
              </span>
            </div>
          </div>
        </header>

        {/* Routes for Home and Instructions */}
        <Routes>
          <Route path="/" element={<QRCodeGenerator />} />
          <Route path="/instructions" element={<InstructionsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
