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
      {/* Two overlapping leaves sprouting from the oval — exactly like the real logo */}
      <svg
        width={100 * scale}
        height={72 * scale}
        viewBox="0 0 100 72"
        fill="none"
        style={{ marginBottom: `${-10 * scale}px`, position: 'relative', zIndex: 1 }}
      >
        {/* Left leaf — tilted left */}
        <path
          d="M50 68C50 68 28 52 22 32C18 18 24 8 30 6C36 4 42 10 46 22C50 34 50 54 50 68Z"
          fill="#3D6B35"
        />
        {/* Left leaf midrib */}
        <path
          d="M32 12C36 24 44 44 50 62"
          stroke="#2D5228"
          strokeWidth="1.2"
          fill="none"
          opacity="0.5"
        />
        {/* Left leaf side veins */}
        <path d="M36 20C40 28 44 34 48 40" stroke="#2D5228" strokeWidth="0.7" fill="none" opacity="0.3" />
        <path d="M30 26C36 32 42 40 46 48" stroke="#2D5228" strokeWidth="0.7" fill="none" opacity="0.3" />

        {/* Right leaf — tilted right, slightly overlapping */}
        <path
          d="M50 68C50 68 72 52 78 32C82 18 76 8 70 6C64 4 58 10 54 22C50 34 50 54 50 68Z"
          fill="#5A8F4A"
        />
        {/* Right leaf midrib */}
        <path
          d="M68 12C64 24 56 44 50 62"
          stroke="#3D6B35"
          strokeWidth="1.2"
          fill="none"
          opacity="0.5"
        />
        {/* Right leaf side veins */}
        <path d="M64 20C60 28 56 34 52 40" stroke="#3D6B35" strokeWidth="0.7" fill="none" opacity="0.3" />
        <path d="M70 26C64 32 58 40 54 48" stroke="#3D6B35" strokeWidth="0.7" fill="none" opacity="0.3" />

        {/* Small stem connecting to oval */}
        <path d="M50 62V72" stroke="#5A8F4A" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Oval pill — wide rounded capsule like the real logo */}
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

      {/* BioComplet — "Bio" in green, "Complet" in dark brown */}
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
