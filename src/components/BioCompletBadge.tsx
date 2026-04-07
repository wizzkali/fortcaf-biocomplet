import React from 'react';

const BioCompletBadge: React.FC<{ size?: number }> = ({ size = 280 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 280 280"
    xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.5))' }}
  >
    <defs>
      {/* Circular text paths */}
      <path id="circleText" d="M 140,140 m -105,0 a 105,105 0 1,1 210,0 a 105,105 0 1,1 -210,0" />

      {/* Arrow markers - green */}
      <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
        <path d="M0,1 L6,5 L0,9" stroke="#8AAF5A" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>

    {/* Dark brown circle background */}
    <circle cx="140" cy="140" r="108" fill="#3A2410" opacity="0.92"/>

    {/* Outer border ring */}
    <circle cx="140" cy="140" r="130" fill="none" stroke="#C9A84C" stroke-width="1" opacity="0.3"/>

    {/* Circular text */}
    <text font-family="Georgia, serif" font-size="12.5" fill="#D4A820" letter-spacing="1.5">
      <textPath href="#circleText" startOffset="2%">
        Fertilizante Orgánico · Economía Circular · Agricultura Sostenible ·
      </textPath>
    </text>

    {/* 3 green arrows at 120° intervals */}
    {/* Arrow top-right */}
    <path
      d="M 155,24 A 118,118 0 0 1 248,185"
      fill="none" stroke="#8AAF5A" stroke-width="3"
      stroke-linecap="round" marker-end="url(#arrowGreen)"
      opacity="0.9"
    />
    {/* Arrow bottom */}
    <path
      d="M 248,185 A 118,118 0 0 1 32,185"
      fill="none" stroke="#8AAF5A" stroke-width="3"
      stroke-linecap="round" marker-end="url(#arrowGreen)"
      opacity="0.9"
    />
    {/* Arrow top-left */}
    <path
      d="M 32,185 A 118,118 0 0 1 155,24"
      fill="none" stroke="#8AAF5A" stroke-width="3"
      stroke-linecap="round" marker-end="url(#arrowGreen)"
      opacity="0.9"
    />

    {/* BioComplet text - matching original style */}
    <text
      x="140" y="122"
      text-anchor="middle"
      font-family="'Cormorant Garamond', Georgia, serif"
      font-size="52"
      font-style="italic"
      font-weight="700"
      fill="#D4A820"
      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
    >Bio</text>
    <text
      x="140" y="170"
      text-anchor="middle"
      font-family="'Cormorant Garamond', Georgia, serif"
      font-size="48"
      font-style="italic"
      font-weight="700"
      fill="#D4A820"
    >Complet</text>

    {/* NPK line - CORRECTED 6-4-4 */}
    <text
      x="140" y="193"
      text-anchor="middle"
      font-family="Georgia, serif"
      font-size="13"
      fill="#C9A84C"
      letter-spacing="1"
      opacity="0.85"
    >NPK 6-4-4 · CAAE</text>
  </svg>
);

export default BioCompletBadge;
