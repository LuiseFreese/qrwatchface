import React, { useRef, useState, useEffect } from 'react';
import QRCodeStyling from 'qr-code-styling';
import './HomeForm.css';

const hexToRgb = hex => {
  const cleaned = hex.replace('#', '');
  const bigint = parseInt(cleaned, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};
const getLuminance = ({ r, g, b }) => {
  const [R, G, B] = [r, g, b].map(c => {
    const cs = c / 255;
    return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};
const calculateContrast = (hex1, hex2) => {
  const L1 = getLuminance(hexToRgb(hex1));
  const L2 = getLuminance(hexToRgb(hex2));
  const [light, dark] = L1 > L2 ? [L1, L2] : [L2, L1];
  return (light + 0.05) / (dark + 0.05);
};

const HomeForm = ({ url, setUrl }) => {
  const qrStylingRef = useRef(null);
  const qrContainerRef = useRef(null);
  const [qrColor, setQrColor] = useState('#007AFF');
  const [showSuccess, setShowSuccess] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [manualBg, setManualBg] = useState(false);
  const [contrastRatio, setContrastRatio] = useState(1);
  const [isAccessible, setIsAccessible] = useState(true);

  useEffect(() => {
    if (!qrStylingRef.current) {
      qrStylingRef.current = new QRCodeStyling({
        width: 150,
        height: 150,
        data: url || '',
        dotsOptions: { type: 'rounded', color: qrColor },
        cornersSquareOptions: { type: 'square', color: qrColor },
        backgroundOptions: { color: backgroundColor },  // user-selected background
        margin: 10,
      });
    } else {
      qrStylingRef.current.update({ data: url || '', dotsOptions: { color: qrColor }, cornersSquareOptions: { color: qrColor }, backgroundOptions: { color: backgroundColor } });
    }
    if (qrContainerRef.current) {
      qrContainerRef.current.innerHTML = '';
      qrStylingRef.current.append(qrContainerRef.current);
    }
  }, [url, qrColor, backgroundColor]);

  useEffect(() => {
    if (!manualBg) {
      const whiteContrast = calculateContrast(qrColor, '#ffffff');
      const blackContrast = calculateContrast(qrColor, '#000000');
      let selectedBg, accessible;
      if (whiteContrast >= 4.5) {
        selectedBg = '#ffffff';
        accessible = true;
      } else if (blackContrast >= 4.5) {
        selectedBg = '#000000';
        accessible = true;
      } else {
        selectedBg = '#ffffff';
        accessible = false;
      }
      const ratio = calculateContrast(qrColor, selectedBg);
      setBackgroundColor(selectedBg);
      setContrastRatio(ratio);
      setIsAccessible(accessible);
    } else {
      const ratio = calculateContrast(qrColor, backgroundColor);
      setContrastRatio(ratio);
      setIsAccessible(ratio >= 4.5);
    }
  }, [qrColor, backgroundColor, manualBg]);

  const handleDownloadWithFeedback = () => {
    if (qrStylingRef.current) {
      qrStylingRef.current.getRawData('png').then(blob => {
        const img = new Image();
        img.onload = () => {
          const qrW = img.width;
          const totalH = Math.round(qrW * 1.25);
          const qrSize = qrW * 0.7;
          const xOffset = (qrW - qrSize) / 2;
          const yOffset = totalH - qrSize;
          const canvas = document.createElement('canvas');
          canvas.width = qrW;
          canvas.height = totalH;
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, qrW, totalH);
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
    setUrl('');
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="apple-hero-form-row home-form">

      <div className="color-picker-row">
        <label className="color-picker-label">
          QR Color:
          <input type="color" value={qrColor} onChange={e => setQrColor(e.target.value)} className="color-input" aria-label="Select QR code color" />
        </label>
        <label className="color-picker-label">
          Background:
          <input type="color" value={backgroundColor} onChange={e => { setBackgroundColor(e.target.value); setManualBg(true); }} className="color-input" aria-label="Select background color" />
        </label>
      </div>

      {!isAccessible && <div className="contrast-warning">Warning: Contrast ratio {contrastRatio.toFixed(2)}:1 is below 4.5:1.</div>}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter URL or QR code content"
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="hero-text-input"
        />
        {url && <div className="input-indicator" />}
      </div>
      
      {url.length > 0 && <div ref={qrContainerRef} className="preview-wrapper" style={{ backgroundColor }} />}
      {url.length > 0 && (
        <button
          onClick={handleDownloadWithFeedback}
          className="download-button enabled"
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
