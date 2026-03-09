import React from 'react';
import logoImg from '@/assets/logo-extracted.png';

interface LogoProps {
  size?: 'sm' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'sm', className = '' }) => {
  const w = size === 'lg' ? 520 : 130;

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {/* White backing circle to make logo fully opaque before blend */}
      <div className="relative">
        <div
          className="absolute rounded-full"
          style={{
            inset: '15%',
            backgroundColor: 'rgba(255,255,255,0.85)',
            filter: 'blur(20px)',
          }}
        />
        <img
          src={logoImg}
          alt="FortCafé BioComplet"
          className="relative mix-blend-multiply"
          style={{
            width: w,
            height: 'auto',
            objectFit: 'contain',
            contrast: 1.3,
            filter: 'contrast(1.3) saturate(1.2)',
          }}
        />
      </div>
    </div>
  );
};

export default Logo;