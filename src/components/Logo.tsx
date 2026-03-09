import React from 'react';
import logoImg from '@/assets/logo-fortcafe.jpg';

interface LogoProps {
  size?: 'sm' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'sm', className = '' }) => {
  const w = size === 'lg' ? 360 : 130;

  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        width: w,
        height: w,
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: size === 'lg'
          ? '0 0 40px 12px rgba(255,255,255,0.35), 0 4px 20px rgba(0,0,0,0.3)'
          : 'none',
      }}
    >
      <img
        src={logoImg}
        alt="FortCafé BioComplet"
        style={{
          width: '140%',
          height: '140%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  );
};

export default Logo;
