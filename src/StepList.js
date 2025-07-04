import React from 'react';

const StepList = () => (
  <ol className="apple-steps-enhanced">
    <li>Download the generated QR code image to your device</li>
    <li>Save the image to your <strong>Photos</strong> app on your iPhone</li>
    <li>Open the <strong>Apple Watch</strong> app on your iPhone</li>
    <li>Navigate to the <strong>Watch Face Gallery</strong> section</li>
    <li>Select <strong>Photos</strong> as your watch face type</li>
    <li>Choose the QR code image from your Photos library</li>
    <li>Customize your preferred style, color, and complications</li>
    <li>Tap <strong>Add</strong> to save your new watchface. <span className="highlight-action">You're all set!</span></li>
  </ol>
);

export default StepList;
