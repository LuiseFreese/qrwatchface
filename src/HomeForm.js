import React, { useRef, useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const HomeForm = ({ url, setUrl, handleDownload }) => {
  const qrCanvasRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (url) {
      setIsGenerating(true);
      const timer = setTimeout(() => {
        setIsGenerating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [url]);

  const handleDownloadWithFeedback = () => {
    handleDownload();
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
      
      <div className="qrContainer" style={{ position: 'relative' }}>
        {url && (
          <div ref={qrCanvasRef} className={`qrWrapper ${isGenerating ? 'generating' : ''}`} style={{margin: '0 auto'}}>
            <QRCodeCanvas value={url} size={120} />
            {isGenerating && (
              <div className="qr-loading-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '12px'
              }}>
                <div className="spinner" />
              </div>
            )}
          </div>
        )}
        {url && (
          <div style={{
            textAlign: 'center',
            marginTop: '12px',
            fontSize: '0.85rem',
            color: '#64748b',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif'
          }}>
            Optimized for Apple Watch display
          </div>
        )}
      </div>
      
      {url && (
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
