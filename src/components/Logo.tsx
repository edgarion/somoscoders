import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const getSizes = () => {
    switch (size) {
      case 'sm':
        return {
          iconWidth: 28,
          iconHeight: 28,
          textSize: 'text-xs',
          titleSize: 'text-sm font-extrabold tracking-tight',
          spacing: 'gap-1.5'
        };
      case 'lg':
        return {
          iconWidth: 54,
          iconHeight: 54,
          textSize: 'text-lg',
          titleSize: 'text-2xl font-extrabold tracking-tight',
          spacing: 'gap-3.5'
        };
      case 'md':
    default:
        return {
          iconWidth: 42,
          iconHeight: 42,
          textSize: 'text-sm font-medium leading-none tracking-normal',
          titleSize: 'text-lg font-bold leading-tight tracking-normal',
          spacing: 'gap-2.5'
        };
    }
  };

  const dims = getSizes();

  return (
    <div id="somoscoders-logo" className={`flex items-center ${dims.spacing} select-none ${className}`}>
      {/* Exact replica of the speech-bubble terminal vector icon */}
      <svg
        width={dims.iconWidth}
        height={dims.iconHeight}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-900 dark:text-white shrink-0"
      >
        {/* Rounded speech bubble speech container */}
        <path
          d="M15 15H85C89.4 15 93 18.6 93 23V67C93 71.4 89.4 75 85 75H38.5L20 90V75H15C10.6 75 7 71.4 7 67V23C7 18.6 10.6 15 15 15Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Prompt CLI symbol ">" */}
        <path
          d="M28 35L42 45L28 55"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Blink block cursor "_" */}
        <line
          x1="48"
          y1="55"
          x2="65"
          y2="55"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>

      {/* Typography: "somos coders" in stacked lowercase format aligned with the image */}
      <div className="flex flex-col text-left font-sans text-gray-900 dark:text-white">
        <span className={`${dims.textSize} lowercase leading-none`}>somos</span>
        <span className={`${dims.titleSize} lowercase leading-none font-bold mt-0.5`}>coders</span>
      </div>
    </div>
  );
};
