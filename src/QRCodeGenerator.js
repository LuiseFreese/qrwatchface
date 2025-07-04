import React, { useState } from 'react';
import './QRCodeGenerator.css';
import HomeHeader from './HomeHeader';
import HomeImage from './HomeImage';
import HomeDescription from './HomeDescription';
import HomeForm from './HomeForm';
import HomeFooter from './HomeFooter';

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');

  const handleDownload = () => {
    const qrWrapper = document.querySelector('.qrWrapper');
    if (qrWrapper) {
      const canvas = qrWrapper.querySelector('canvas');
      if (canvas) {
        const paddingTop = canvas.height * 1.4;
        const paddingBottom = canvas.height * 0.15;
        const paddingLeft = 20;
        const paddingRight = 20;

        const scaleFactor = 4;
        const paddedCanvas = document.createElement('canvas');
        const paddedCtx = paddedCanvas.getContext('2d');
        paddedCanvas.width = (canvas.width + paddingLeft + paddingRight) * scaleFactor;
        paddedCanvas.height = (canvas.height + paddingTop + paddingBottom) * scaleFactor;

        paddedCtx.fillStyle = 'white';
        paddedCtx.fillRect(0, 0, paddedCanvas.width, paddedCanvas.height);
        paddedCtx.scale(scaleFactor, scaleFactor);

        paddedCtx.drawImage(canvas, paddingLeft, paddingTop);

        const imageUrl = paddedCanvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'qr-code.png';
        link.click();
      }
    }
  };

  return (
    <div className="container apple-hero">
      <HomeHeader />
      <HomeImage />
      <div className="apple-hero-steps" style={{marginBottom: 32}}>
        <HomeDescription />
        <HomeForm url={url} setUrl={setUrl} handleDownload={handleDownload} />
      </div>
      <HomeFooter />
    </div>
  );
};

export default QRCodeGenerator;
