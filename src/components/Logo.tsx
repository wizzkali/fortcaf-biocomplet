import React from 'react';
import logoImg from '@/assets/logo-extracted.png';

interface LogoProps {
  size?: 'sm' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'sm', className = '' }) => {
  const w = size === 'lg' ? 420 : 130;

  return (
    <img
      src={logoImg}
      alt="FortCafé BioComplet"
      className={`mix-blend-multiply ${className}`}
      style={{ width: w, height: 'auto', objectFit: 'contain' }}
    />
  );
};

export default Logo;