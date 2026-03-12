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
      className={`${variant === 'dark' ? 'mix-blend-multiply contrast-125 saturate-150' : 'brightness-0 invert'} ${className}`}
      style={{
        width: w,
        height: 'auto',
        objectFit: 'contain',
        filter: variant === 'dark'
          ? 'drop-shadow(0 0 12px rgba(90,143,74,0.5)) drop-shadow(0 2px 6px rgba(0,0,0,0.3))'
          : undefined,
      }}
    />
  );
};

export default Logo;