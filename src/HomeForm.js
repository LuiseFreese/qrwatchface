import React, { useRef, useState, useEffect } from 'react';
import QRCodeStyling from 'qr-code-styling';

const HomeForm = ({ url, setUrl }) => {
  const qrStylingRef = useRef(null);
  const qrContainerRef = useRef(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // initialize instance once
    if (!qrStylingRef.current) {
      qrStylingRef.current = new QRCodeStyling({
        width: 150,
        height: 150,
        data: url || '',
        dotsOptions: {
          type: 'rounded',
          gradient: { type: 'linear', rotation: 0, colorStops: [ { offset: 0, color: '#007AFF' }, { offset: 1, color: '#0056B3' } ] }
        },
        cornersSquareOptions: { type: 'square', color: '#007AFF' },
        backgroundOptions: { color: 'transparent' },
        margin: 10,
      });
    }
    // update data and render
    qrStylingRef.current.update({ data: url || '' });
    if (qrContainerRef.current) {
      qrContainerRef.current.innerHTML = '';
      qrStylingRef.current.append(qrContainerRef.current);
    }
  }, [url]);

  const handleDownloadWithFeedback = () => {
    if (qrStylingRef.current) {
      qrStylingRef.current.getRawData('png').then(blob => {
        const img = new Image();
        img.onload = () => {
          const qrW = img.width;
          // total 4:5 aspect ratio (width : height = 4 : 5 => height = 1.25 * width)
          const totalH = Math.round(qrW * 1.25);
          // scale QR to 70% for more white margin while retaining resolution
          const qrSize = qrW * 0.7;
          // center horizontally and align bottom
          const xOffset = (qrW - qrSize) / 2;
          const yOffset = totalH - qrSize;
          const canvas = document.createElement('canvas');
          canvas.width = qrW;
          canvas.height = totalH;
          const ctx = canvas.getContext('2d');
          // white background
          ctx.fillStyle = '#fff';
          ctx.fillRect(0, 0, qrW, totalH);
          // draw scaled QR in bottom area
          ctx.drawImage(img, xOffset, yOffset, qrSize, qrSize);
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = 'qr-watchface.png';
          link.click();
          URL.revokeObjectURL(img.src);
        };
        img.src = URL.createObjectURL(blob);
      });
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="apple-hero-form-row" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18}}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 320 }}>
        <input
          type="text"
          placeholder="Enter URL or QR code content"
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="input apple-hero-input"
          style={{maxWidth: 320, fontSize: '1.1rem', width: '100%'}}
        />
        {url && (
          <div className="input-indicator" style={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: '#00C851',
            animation: 'pulse 2s infinite'
          }} />
        )}
      </div>
      
      {/* QR preview live as you type (only if input present) */}
      {url.length > 0 && (
        <div
          ref={qrContainerRef}
          className="qrWrapper"
          style={{ width: 150, height: 150, margin: '16px auto' }}
        />
      )}
      {url.length > 0 && (
        <button 
          onClick={handleDownloadWithFeedback} 
          className={`downloadButton ${showSuccess ? 'success' : ''}`} 
          style={{fontSize: '1.08rem', padding: '12px 32px', position: 'relative'}}
        >
          <span className="button-text">
            {showSuccess ? '✓ Downloaded!' : 'Download QR Code'}
          </span>
        </button>
      )}
    </div>
  );
};

export default HomeForm;
