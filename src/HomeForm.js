import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const HomeForm = ({ url, setUrl, handleDownload }) => {
  const qrCanvasRef = useRef(null);

  return (
    <div className="apple-hero-form-row" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18}}>
      <input
        type="text"
        placeholder="Enter URL or QR code content"
        value={url}
        onChange={e => setUrl(e.target.value)}
        className="input apple-hero-input"
        style={{maxWidth: 320, fontSize: '1.1rem'}}
      />
      <div className="qrContainer">
        {url && (
          <div ref={qrCanvasRef} className="qrWrapper" style={{margin: '0 auto'}}>
            <QRCodeCanvas value={url} size={50} />
          </div>
        )}
      </div>
      {url && (
        <button onClick={handleDownload} className="downloadButton" style={{fontSize: '1.08rem', padding: '12px 32px'}}>
          Download QR Code
        </button>
      )}
    </div>
  );
};

export default HomeForm;
