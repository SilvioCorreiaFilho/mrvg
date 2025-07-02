import React from 'react';

const LegalThemeImage = ({ className }) => {
  // Using SVG for a scalable legal-themed image with the website's color scheme
  return (
    <div className={`legal-theme-image ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background with classical legal architecture influence */}
        <defs>
          <linearGradient id="columnGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e7e7e7" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#232323" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B0843B" />
            <stop offset="50%" stopColor="#D4AF61" />
            <stop offset="100%" stopColor="#B0843B" />
          </linearGradient>
          <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
          <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
            <feOffset dx="2" dy="4" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="scaleClip">
            <circle cx="300" cy="160" r="80" />
          </clipPath>
        </defs>

        {/* Elegant background with subtle columns */}
        <rect x="0" y="0" width="600" height="400" fill="#e7e7e7" />
        
        <g opacity="0.3">
          {/* Left decorative column */}
          <rect x="40" y="20" width="40" height="360" rx="3" fill="url(#columnGradient)" />
          <rect x="50" y="10" width="20" height="30" rx="2" fill="#232323" opacity="0.4" />
          <rect x="45" y="380" width="30" height="15" rx="1" fill="#232323" opacity="0.4" />
          
          {/* Right decorative column */}
          <rect x="520" y="20" width="40" height="360" rx="3" fill="url(#columnGradient)" />
          <rect x="530" y="10" width="20" height="30" rx="2" fill="#232323" opacity="0.4" />
          <rect x="525" y="380" width="30" height="15" rx="1" fill="#232323" opacity="0.4" />
        </g>

        {/* Central decorative element - abstract arch */}
        <path 
          d="M150,380 C150,280 450,280 450,380" 
          fill="none" 
          stroke="#232323" 
          strokeWidth="5" 
          opacity="0.15"
        />
        
        {/* Scales of Justice - Central element */}
        <g transform="translate(300, 160)" filter="url(#dropShadow)">
          {/* Scale support */}
          <rect x="-5" y="-140" width="10" height="140" fill="#232323" />
          
          {/* Top ornament */}
          <circle cx="0" cy="-140" r="15" fill="url(#goldGradient)" />
          
          {/* Balance bar */}
          <rect x="-100" y="-150" width="200" height="10" rx="2" fill="#232323" />
          
          {/* Scale plates - Left */}
          <g>
            <line x1="-100" y1="-150" x2="-100" y2="-90" stroke="#666666" strokeWidth="3" />
            <circle cx="-100" cy="-70" r="30" fill="#e7e7e7" stroke="#232323" strokeWidth="2" />
            <circle cx="-100" cy="-70" r="25" fill="transparent" stroke="#232323" strokeWidth="1" opacity="0.5" />
          </g>
          
          {/* Scale plates - Right */}
          <g>
            <line x1="100" y1="-150" x2="100" y2="-90" stroke="#666666" strokeWidth="3" />
            <circle cx="100" cy="-70" r="30" fill="#e7e7e7" stroke="#232323" strokeWidth="2" />
            <circle cx="100" cy="-70" r="25" fill="transparent" stroke="#232323" strokeWidth="1" opacity="0.5" />
          </g>
        </g>
        
        {/* Law books stack */}
        <g transform="translate(100, 280)" filter="url(#dropShadow)">
          <rect x="-60" y="-20" width="120" height="25" rx="2" fill="#232323" />
          <rect x="-55" y="-45" width="110" height="25" rx="2" fill="#666666" />
          <rect x="-58" y="-70" width="116" height="25" rx="2" fill="url(#goldGradient)" />
          <rect x="-50" y="-95" width="100" height="25" rx="2" fill="#232323" />
          
          {/* Gold lettering embossing on books - abstract representation */}
          <rect x="-40" y="-85" width="80" height="5" rx="1" fill="#e7e7e7" opacity="0.2" />
          <rect x="-45" y="-60" width="70" height="5" rx="1" fill="#e7e7e7" opacity="0.2" />
          <rect x="-35" y="-35" width="60" height="5" rx="1" fill="#e7e7e7" opacity="0.2" />
          <rect x="-30" y="-10" width="50" height="5" rx="1" fill="#e7e7e7" opacity="0.2" />
        </g>
        
        {/* Gavel */}
        <g transform="translate(480, 280) rotate(-30)" filter="url(#dropShadow)">
          {/* Gavel head */}
          <rect x="-30" y="-15" width="60" height="30" rx="5" fill="#232323" />
          
          {/* Gavel handle */}
          <rect x="-8" y="-100" width="16" height="120" rx="8" fill="url(#goldGradient)" />
          
          {/* Gavel base */}
          <rect x="-40" y="30" width="80" height="10" rx="3" fill="#232323" />
          <rect x="-35" y="40" width="70" height="5" rx="1" fill="#232323" opacity="0.7" />
          
          {/* Decorative rings */}
          <rect x="-12" y="-85" width="24" height="5" rx="2" fill="#232323" />
          <rect x="-12" y="-40" width="24" height="5" rx="2" fill="#232323" />
        </g>
        
        {/* Decorative paragraph symbols */}
        <g transform="translate(300, 300)" opacity="0.7">
          <path 
            d="M-5,30 Q-5,0 15,0 Q35,0 35,20 Q35,35 20,35 L20,50 M-20,-20 Q-20,-50 0,-50 Q20,-50 20,-30 Q20,-15 5,-15 L5,0" 
            fill="none" 
            stroke="url(#goldGradient)" 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </g>

        {/* Subtle background legal text - abstract representation */}
        <g opacity="0.05">
          {[...Array(10)].map((_, i) => (
            <rect 
              key={i} 
              x={Math.random() * 300 + 150} 
              y={Math.random() * 200 + 100} 
              width={Math.random() * 100 + 50} 
              height="2" 
              rx="1" 
              fill="#232323" 
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default LegalThemeImage;
