import React from 'react';
import logoImg from '@/assets/logo-fortcafe.jpg';

interface LogoProps {
  size?: 'sm' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'sm', className = '' }) => {
  const w = size === 'lg' ? 360 : 130;

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img
        src={logoImg}
        alt="FortCafé BioComplet"
        style={{ width: w, height: 'auto', objectFit: 'contain' }}
      />
    </div>
  );
};

export default Logo;
