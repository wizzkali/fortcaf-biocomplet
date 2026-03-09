import React from 'react';

const CoffeeStain: React.FC<{ className?: string; size?: number; opacity?: number }> = ({
  className = '',
  size = 200,
  opacity = 0.15,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    className={`absolute pointer-events-none ${className}`}
    style={{ opacity }}
  >
    <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(30 50% 26%)" strokeWidth="8" opacity="0.4" />
    <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(30 50% 26%)" strokeWidth="3" opacity="0.2" />
    <circle cx="60" cy="140" r="30" fill="hsl(30 50% 26%)" opacity="0.15" />
  </svg>
);

export default CoffeeStain;
