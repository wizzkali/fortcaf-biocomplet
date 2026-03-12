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
      className={`${variant === 'dark' ? 'mix-blend-multiply contrast-110 saturate-[1.2]' : 'brightness-0 invert'} ${className}`}
      style={{
        width: w,
        height: 'auto',
        objectFit: 'contain',
        filter: variant === 'dark'
          ? 'drop-shadow(0 1px 4px rgba(0,0,0,0.2))'
          : undefined,
      }}
    />
  );
};

export default Logo;