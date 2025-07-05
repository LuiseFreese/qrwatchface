import React from 'react';
import './QRCodeGenerator.css';
import InstructionsHeader from './InstructionsHeader';
import InstructionsSection from './InstructionsSection';

const InstructionsPage = () => {
  return (
    <div className="container apple-hero">
      <InstructionsHeader />
      <InstructionsSection />
    </div>
  );
};

export default InstructionsPage;
