import React from 'react';
import logoImg from '@/assets/logo-fortcafe-clean.png';

interface LogoProps {
  size?: 'sm' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'sm', className = '' }) => {
  const w = size === 'lg' ? 320 : 120;

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        filter: size === 'lg'
          ? 'drop-shadow(0 0 24px rgba(255,255,255,0.4)) drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
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