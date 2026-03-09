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
      {/* Detailed leaves — 3 leaves like the real logo */}
      <svg
        width={140 * scale}
        height={100 * scale}
        viewBox="0 0 140 100"
        fill="none"
      >
        {/* Center leaf (tallest) */}
        <path
          d="M70 80C70 80 62 50 66 28C68 18 70 10 70 10C70 10 72 18 74 28C78 50 70 80 70 80Z"
          fill="#3D6B35"
        />
        <path d="M70 14V72" stroke="#2D5228" strokeWidth="1" opacity="0.6" />
        <path d="M70 30C68 36 66 42 66 48" stroke="#2D5228" strokeWidth="0.6" opacity="0.4" />
        <path d="M70 30C72 36 74 42 74 48" stroke="#2D5228" strokeWidth="0.6" opacity="0.4" />

        {/* Left leaf */}
        <path
          d="M70 82C70 82 42 64 30 42C24 30 22 20 26 16C30 12 38 16 46 28C56 44 66 70 70 82Z"
          fill="#5A8F4A"
        />
        <path d="M30 22C40 36 54 56 68 78" stroke="#3D6B35" strokeWidth="1" opacity="0.5" />
        <path d="M38 30C42 38 46 44 50 50" stroke="#3D6B35" strokeWidth="0.6" opacity="0.3" />
        <path d="M44 36C48 42 52 50 56 56" stroke="#3D6B35" strokeWidth="0.6" opacity="0.3" />

        {/* Right leaf */}
        <path
          d="M70 82C70 82 98 64 110 42C116 30 118 20 114 16C110 12 102 16 94 28C84 44 74 70 70 82Z"
          fill="#5A8F4A"
        />
        <path d="M110 22C100 36 86 56 72 78" stroke="#3D6B35" strokeWidth="1" opacity="0.5" />
        <path d="M102 30C98 38 94 44 90 50" stroke="#3D6B35" strokeWidth="0.6" opacity="0.3" />
        <path d="M96 36C92 42 88 50 84 56" stroke="#3D6B35" strokeWidth="0.6" opacity="0.3" />

        {/* Small stem */}
        <path d="M70 80V96" stroke="#5A8F4A" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Oval pill with text — rounded rectangle like real logo */}
      <div
        className="flex items-center justify-center"
        style={{
          backgroundColor: '#2C1A0E',
          borderRadius: `${28 * scale}px`,
          padding: `${14 * scale}px ${48 * scale}px`,
          marginTop: `${-6 * scale}px`,
          boxShadow: size === 'lg' ? '0 6px 24px rgba(44, 26, 14, 0.3)' : 'none',
        }}
      >
        <span
          className="font-display"
          style={{
            color: '#FAF6EE',
            fontSize: `${46 * scale}px`,
            fontWeight: 700,
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
          }}
        >
          FortCafé
        </span>
      </div>

      {/* BioComplet text */}
      <span
        className="font-display"
        style={{
          color: '#3D6B35',
          fontSize: `${28 * scale}px`,
          fontWeight: 700,
          letterSpacing: '0.02em',
          marginTop: `${6 * scale}px`,
        }}
      >
        <span style={{ color: '#3D6B35' }}>Bio</span>
        <span style={{ color: '#2C1A0E' }}>Complet</span>
      </span>
    </div>
  );
};

export default Logo;
