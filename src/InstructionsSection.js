import React from 'react';
import StepList from './StepList';

const InstructionsSection = () => (
  <div className="instructions-section">
    <h2 className="instructions-section-title">
      <span className="instructions-section-icon">📱</span>
      Setup Guide
    </h2>
    <StepList />
    <div className="instructions-footer">
      <p>Need help? Find this project on <a href="https://github.com/LuiseFreese/QRWatchface" target="_blank" rel="noopener noreferrer">GitHub</a> for support and updates.</p>
    </div>
  </div>
);

export default InstructionsSection;
