import React from 'react';

const HomeImage = () => (
  <div className="apple-hero-image-row">
    <img src={process.env.PUBLIC_URL + '/watch.png'} alt="Apple Watch Example" className="applewatch-hero-photo" />
  </div>
);

export default HomeImage;
