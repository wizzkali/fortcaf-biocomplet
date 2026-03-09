import React from 'react';

interface LogoProps {
  size?: 'sm' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'sm', className = '' }) => {
  const w = size === 'lg' ? 360 : 130;
  const scale = w / 360;

  return (
    <div className={`inline-flex flex-col items-center ${className}`} style={{ width: w }}>
      {/* Three overlapping leaves — smooth, rounded, natural shape like the real packaging */}
      <svg
        width={110 * scale}
        height={80 * scale}
        viewBox="0 0 110 80"
        fill="none"
        style={{ marginBottom: `${-8 * scale}px`, position: 'relative', zIndex: 1 }}
      >
        {/* Left leaf — dark green, tilted left */}
        <path
          d="M55 72 C52 60, 32 40, 26 22 C24 16, 28 10, 34 12 C40 14, 50 32, 55 52Z"
          fill="#3D6B35"
        />
        {/* Left leaf midrib */}
        <path d="M34 16 C40 28, 50 48, 55 64" stroke="#2D5228" strokeWidth="0.8" fill="none" opacity="0.4" />

        {/* Right leaf — medium green, tilted right */}
        <path
          d="M55 72 C58 60, 78 40, 84 22 C86 16, 82 10, 76 12 C70 14, 60 32, 55 52Z"
          fill="#4A7D3E"
        />
        {/* Right leaf midrib */}
        <path d="M76 16 C70 28, 60 48, 55 64" stroke="#3D6B35" strokeWidth="0.8" fill="none" opacity="0.4" />

        {/* Center leaf — lighter green, pointing up, on top */}
        <path
          d="M55 70 C53 54, 44 30, 46 14 C47 8, 52 4, 55 4 C58 4, 63 8, 64 14 C66 30, 57 54, 55 70Z"
          fill="#5A8F4A"
        />
        {/* Center leaf midrib */}
        <path d="M55 8 L55 65" stroke="#3D6B35" strokeWidth="0.8" fill="none" opacity="0.4" />

        {/* Stem */}
        <path d="M55 68 L55 80" stroke="#5A8F4A" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Oval pill */}
      <div
        className="flex items-center justify-center"
        style={{
          backgroundColor: '#2C1A0E',
          borderRadius: `${30 * scale}px`,
          padding: `${12 * scale}px ${44 * scale}px`,
          boxShadow: size === 'lg' ? '0 4px 20px rgba(44, 26, 14, 0.25)' : 'none',
        }}
      >
        <span
          className="font-display"
          style={{
            color: '#FAF6EE',
            fontSize: `${44 * scale}px`,
            fontWeight: 700,
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
          }}
        >
          FortCafé
        </span>
      </div>

      {/* BioComplet */}
      <div
        style={{
          marginTop: `${6 * scale}px`,
          fontSize: `${26 * scale}px`,
          fontWeight: 700,
          letterSpacing: '0.01em',
        }}
      >
        <span className="font-body" style={{ color: '#3D6B35' }}>Bio</span>
        <span className="font-body" style={{ color: '#2C1A0E' }}>Complet</span>
      </div>
    </div>
  );
};

export default Logo;
