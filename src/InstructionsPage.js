import React from 'react';
import './QRCodeGenerator.css';
import InstructionsHeader from './InstructionsHeader';
import InstructionsSection from './InstructionsSection';

const InstructionsPage = () => {
  return (
    <div className="instructions-container">
      <div className="instructions-header">
        <InstructionsHeader />
      </div>
      <div className="instructions-content">
        <InstructionsSection />
      </div>
    </div>
  );
};

export default InstructionsPage;
