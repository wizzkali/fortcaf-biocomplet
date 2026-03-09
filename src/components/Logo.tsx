import React from 'react';

interface LogoProps {
  size?: 'sm' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'sm', className = '' }) => {
  const w = size === 'lg' ? 320 : 130;
  const scale = w / 320;

  return (
    <div className={`inline-flex flex-col items-center ${className}`} style={{ width: w }}>
      {/* Detailed leaves */}
      <svg
        width={120 * scale}
        height={80 * scale}
        viewBox="0 0 120 80"
        fill="none"
        className="mb-1"
      >
        {/* Left leaf */}
        <path
          d="M60 72C44 58 20 42 28 14C30 10 34 8 38 12C44 20 52 36 58 52C56 40 50 26 46 16C48 12 52 10 54 14C58 24 60 40 60 56"
          fill="#5A8F4A"
        />
        {/* Left leaf vein */}
        <path
          d="M60 68C50 54 36 36 34 18"
          stroke="#3D6B35"
          strokeWidth="1.2"
          fill="none"
        />
        <path d="M48 36C44 30 40 26 38 22" stroke="#3D6B35" strokeWidth="0.8" fill="none" />
        <path d="M52 46C48 40 44 34 42 30" stroke="#3D6B35" strokeWidth="0.8" fill="none" />
        <path d="M55 54C52 48 48 42 46 38" stroke="#3D6B35" strokeWidth="0.8" fill="none" />

        {/* Right leaf */}
        <path
          d="M60 72C76 58 100 42 92 14C90 10 86 8 82 12C76 20 68 36 62 52C64 40 70 26 74 16C72 12 68 10 66 14C62 24 60 40 60 56"
          fill="#5A8F4A"
        />
        {/* Right leaf vein */}
        <path
          d="M60 68C70 54 84 36 86 18"
          stroke="#3D6B35"
          strokeWidth="1.2"
          fill="none"
        />
        <path d="M72 36C76 30 80 26 82 22" stroke="#3D6B35" strokeWidth="0.8" fill="none" />
        <path d="M68 46C72 40 76 34 78 30" stroke="#3D6B35" strokeWidth="0.8" fill="none" />
        <path d="M65 54C68 48 72 42 74 38" stroke="#3D6B35" strokeWidth="0.8" fill="none" />

        {/* Stem */}
        <path d="M60 56V74" stroke="#5A8F4A" strokeWidth="2" />
      </svg>

      {/* Oval pill with text */}
      <div
        className="flex items-center justify-center rounded-full"
        style={{
          backgroundColor: '#2C1A0E',
          padding: `${10 * scale}px ${36 * scale}px`,
          boxShadow: `0 ${4 * scale}px ${16 * scale}px rgba(44, 26, 14, 0.35)`,
        }}
      >
        <span
          className="font-display font-bold italic"
          style={{
            color: '#FAF6EE',
            fontSize: `${38 * scale}px`,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}
        >
          FortCafé
        </span>
      </div>

      {/* BioComplet text */}
      <span
        className="font-display font-bold"
        style={{
          color: '#5A8F4A',
          fontSize: `${22 * scale}px`,
          letterSpacing: '0.03em',
          marginTop: `${4 * scale}px`,
        }}
      >
        BioComplet
      </span>
    </div>
  );
};

export default Logo;
