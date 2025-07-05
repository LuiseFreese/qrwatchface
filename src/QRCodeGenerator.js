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
            const qrSize = canvas.width;
            const finalWidth = qrSize * 6/5;
            const finalHeight = qrSize * 3/2;
            const xOffset = (finalWidth - qrSize) / 2;
            const destWidth = canvas.width * 0.5;
            const destHeight = canvas.height * 0.5;
            const regionStart = finalHeight / 3;
            const regionHeight = (finalHeight * 2) / 3;
            const yOffset = regionStart + (regionHeight - destHeight) / 2;
            const scaleFactor = 4;
            const paddedCanvas = document.createElement('canvas');
            const paddedCtx = paddedCanvas.getContext('2d');
            paddedCanvas.width = finalWidth * scaleFactor;
            paddedCanvas.height = finalHeight * scaleFactor;
            paddedCtx.fillStyle = 'white';
            paddedCtx.fillRect(0, 0, paddedCanvas.width, paddedCanvas.height);
            paddedCtx.scale(scaleFactor, scaleFactor);
            paddedCtx.drawImage(canvas, xOffset + (canvas.width - destWidth) / 2, yOffset, destWidth, destHeight);

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
