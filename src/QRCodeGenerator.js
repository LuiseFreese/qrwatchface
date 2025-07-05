import React, { useState } from 'react';
import './QRCodeGenerator.css';
import HomeHeader from './HomeHeader';
import HomeImage from './HomeImage';
import HomeDescription from './HomeDescription';
import HomeForm from './HomeForm';
import HomeFooter from './HomeFooter';

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');



  return (
    <div className="container apple-hero">
      <HomeHeader />
      <HomeImage />
      <div className="apple-hero-steps" style={{marginBottom: 32}}>
        <HomeDescription />
        <HomeForm url={url} setUrl={setUrl} />
      </div>
      <HomeFooter />
    </div>
  );
};

export default QRCodeGenerator;
