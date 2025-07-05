import React from 'react';

const StepList = () => (
  <ol className="apple-steps">
    <li>Download the generated image</li>
    <li>Save the image to your Photos app on your iPhone</li>
    <li>Open the Apple Watch app on your iPhone</li>
    <li>Go to the <span style={{ padding: '0 0.25em' }}><b>Watchface</b></span> section</li>
    <li>Select <span style={{ padding: '0 0.25em' }}><b>Photos</b></span> as your watchface</li>
    <li>Choose the downloaded image from your Photos app</li>
    <li>Select your preferred style (color, font, etc.)</li>
    <li>Save your watchface. <span className="highlight-action"> Done!</span></li>
  </ol>
);

export default StepList;
