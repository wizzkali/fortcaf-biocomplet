import React from 'react';

interface LogoProps {
  size?: 'sm' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'sm', className = '' }) => {
  const w = size === 'lg' ? 200 : 120;
  const scale = w / 200;

  return (
    <div className={`inline-flex flex-col items-center ${className}`} style={{ width: w }}>
      {/* Leaves */}
      <svg width={40 * scale} height={28 * scale} viewBox="0 0 40 28" fill="none" className="mb-1">
        <path d="M20 26C12 20 4 12 8 4C12 8 18 14 20 20" fill="#5A8F4A" />
        <path d="M20 26C28 20 36 12 32 4C28 8 22 14 20 20" fill="#5A8F4A" />
        <path d="M20 20V26" stroke="#5A8F4A" strokeWidth="1.5" />
      </svg>
      {/* Oval pill with text */}
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          backgroundColor: '#2C1A0E',
          padding: `${6 * scale}px ${20 * scale}px`,
        }}
      >
        <span
          className="font-display font-bold"
          style={{
            color: '#FAF6EE',
            fontSize: `${22 * scale}px`,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}
        >
          FortCafé
        </span>
      </div>
      {/* BioComplet text */}
      <span
        className="font-body font-semibold mt-0.5"
        style={{
          color: '#5A8F4A',
          fontSize: `${12 * scale}px`,
          letterSpacing: '0.05em',
        }}
      >
        BioComplet
      </span>
    </div>
  );
};

export default Logo;
