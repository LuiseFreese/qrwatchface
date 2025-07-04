import React from 'react';
import StepList from './StepList';

const InstructionsSection = () => (
  <div className="apple-hero-steps">
    <h2 className="apple-hero-steps-title">Step-by-Step Instructions</h2>
    <StepList />
    <p className="instructions-footer">Find this project on <a href="https://github.com/LuiseFreese" target="_blank" rel="noopener noreferrer" className="link">my GitHub Profile</a></p>
  </div>
);

export default InstructionsSection;
