import React from 'react';
import logoImg from '@/assets/logo-extracted.png';

interface LogoProps {
  size?: 'sm' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'sm', className = '' }) => {
  const w = size === 'lg' ? 420 : 130;

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        filter: size === 'lg'
          ? 'drop-shadow(0 0 30px rgba(255,255,255,0.45)) drop-shadow(0 4px 16px rgba(0,0,0,0.35))'
          : 'none',
      }}
    >
      <img
        src={logoImg}
        alt="FortCafé BioComplet"
        style={{ width: w, height: 'auto', objectFit: 'contain' }}
      />
    </div>
  );
};

export default Logo;