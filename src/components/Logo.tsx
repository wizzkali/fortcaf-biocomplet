import React from 'react';
import logoImg from '@/assets/logo-extracted.png';

interface LogoProps {
  size?: 'sm' | 'lg';
  variant?: 'dark' | 'light';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'sm', variant = 'dark', className = '' }) => {
  const w = size === 'lg' ? 520 : 130;

  return (
    <img
      src={logoImg}
      alt="FortCafé BioComplet"
      className={className}
      style={{
        width: w,
        height: 'auto',
        objectFit: 'contain',
        filter: variant === 'light' ? 'brightness(0) invert(1)' : 'none',
      }}
    />
  );
};

export default Logo;
