import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', isLight = false }) => {
  const getSizes = () => {
    switch (size) {
      case 'sm':
        return {
          iconWidth: 32,
          iconHeight: 32,
          textSize: 'text-xs',
          titleSize: 'text-sm font-extrabold',
          spacing: 'gap-2',
          strokeW: '9'
        };
      case 'lg':
        return {
          iconWidth: 56,
          iconHeight: 56,
          textSize: 'text-base',
          titleSize: 'text-2xl font-extrabold',
          spacing: 'gap-3.5',
          strokeW: '10'
        };
      case 'md':
      default:
        return {
          iconWidth: 44,
          iconHeight: 44,
          textSize: 'text-sm font-semibold',
          titleSize: 'text-xl font-extrabold',
          spacing: 'gap-2.5',
          strokeW: '9.5'
        };
    }
  };

  const dims = getSizes();
  const colorClass = isLight ? 'text-white' : 'text-[#0D1117]';

  return (
    <div id="somoscoders-logo" className={`flex items-center ${dims.spacing} select-none ${colorClass} ${className}`}>
      {/* Icono de terminal en globo de conversación idéntico al logo original */}
      <svg
        width={dims.iconWidth}
        height={dims.iconHeight}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Globo de terminal con contorno */}
        <path
          d="M14 16H86C90.4 16 94 19.6 94 24V66C94 70.4 90.4 74 86 74H38L20 88V74H14C9.6 74 6 70.4 6 66V24C6 19.6 9.6 16 14 16Z"
          fill="none"
          stroke="currentColor"
          strokeWidth={dims.strokeW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Prompt > */}
        <path
          d="M26 34L42 46L26 58"
          stroke="currentColor"
          strokeWidth={dims.strokeW}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Cursor guión bajo _ */}
        <line
          x1="50"
          y1="58"
          x2="68"
          y2="58"
          stroke="currentColor"
          strokeWidth={dims.strokeW}
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark oficial: somos / coders */}
      <div className="flex flex-col text-left font-sans leading-none">
        <span className={`${dims.textSize} lowercase tracking-normal font-semibold`}>somos</span>
        <span className={`${dims.titleSize} lowercase tracking-tight font-extrabold mt-0.5`}>coders</span>
      </div>
    </div>
  );
};
