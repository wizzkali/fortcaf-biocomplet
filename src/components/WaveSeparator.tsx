import React from 'react';

interface WaveSeparatorProps {
  color?: string;
  flip?: boolean;
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({ color = '#F2E8D0', flip = false }) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} style={{ marginTop: -1, marginBottom: -1 }}>
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-16 block">
      <path
        d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z"
        fill={color}
      />
    </svg>
  </div>
);

export default WaveSeparator;
