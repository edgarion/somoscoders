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
          somosSize: 'text-[11px] font-bold tracking-[0.22em] text-[#087A65]',
          codersSize: 'text-[15px] font-black tracking-[-0.04em]',
          spacing: 'gap-2.5',
          strokeW: '9'
        };
      case 'lg':
        return {
          iconWidth: 54,
          iconHeight: 54,
          somosSize: 'text-[15px] font-bold tracking-[0.24em] text-[#087A65]',
          codersSize: 'text-[26px] font-black tracking-[-0.04em]',
          spacing: 'gap-3.5',
          strokeW: '10'
        };
      case 'md':
      default:
        return {
          iconWidth: 42,
          iconHeight: 42,
          somosSize: 'text-[12px] font-bold tracking-[0.24em] text-[#087A65]',
          codersSize: 'text-[20px] font-black tracking-[-0.04em]',
          spacing: 'gap-3',
          strokeW: '9.5'
        };
    }
  };

  const dims = getSizes();
  const mainColorClass = isLight ? 'text-white' : 'text-[#0D1117]';
  const somosColor = isLight ? 'text-[#C8FF00]' : 'text-[#00A98F]';

  return (
    <div id="somoscoders-logo" className={`flex items-center ${dims.spacing} select-none ${mainColorClass} group ${className}`}>
      {/* Isotipo: Terminal en bocadillo con trazos limpios y proporcionados */}
      <svg
        width={dims.iconWidth}
        height={dims.iconHeight}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-2deg]"
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

      {/* Wordmark Tipográfico con Branding de Identidad: SOMOS (kerning expandido) + CODERS (Grotesk ultra-bold) */}
      <div className="flex flex-col text-left justify-center leading-none">
        <span className={`font-mono uppercase ${dims.somosSize} ${somosColor} transition-colors`}>
          somos
        </span>
        <span className={`font-display lowercase ${dims.codersSize} text-inherit -mt-0.5`}>
          coders<span className="text-[#00A98F]">.</span>
        </span>
      </div>
    </div>
  );
};
