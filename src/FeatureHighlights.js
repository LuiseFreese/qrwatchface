import React from 'react';

const FeatureHighlights = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Instant Generation',
      description: 'Create QR codes in milliseconds with real-time preview'
    },
    {
      icon: '📱',
      title: 'Watch Optimized',
      description: 'Perfect sizing and format for Apple Watch faces'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Clean, modern interface with dark mode support'
    }
  ];

  return (
    <div className="feature-highlights" style={{ marginTop: 48, marginBottom: 32 }}>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureHighlights;
