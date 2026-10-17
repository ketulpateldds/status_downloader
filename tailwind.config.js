const path = require('path');
const baseDir = __dirname.replace(/\\/g, '/');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    `${baseDir}/app/**/*.{js,ts,jsx,tsx,mdx}`,
    `${baseDir}/components/**/*.{js,ts,jsx,tsx,mdx}`,
    `${baseDir}/content/**/*.{js,ts,jsx,tsx,mdx}`,
    `${baseDir}/data/**/*.{js,ts,jsx,tsx,mdx}`,
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2b5fe6',
          violet: '#5b3be8',
          gradientStart: '#2b5fe6',
          gradientEnd: '#5b3be8',
        },
        navy: {
          DEFAULT: '#1b1f3b',
          muted: '#5b6085',
          light: '#8f94b3',
        },
        accent: {
          pink: '#ec4a7b',
          sky: '#2b8de8',
          purple: '#8b5cf6',
          green: '#22b573',
          orange: '#f59e0b',
        },
        surface: {
          bg: '#f6f8fd',
          card: '#ffffff',
          hover: '#f8faff',
          border: '#e6eaf5',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '28px',
      },
      boxShadow: {
        soft: '0 10px 30px -5px rgba(27, 31, 59, 0.05), 0 4px 6px -2px rgba(27, 31, 59, 0.02)',
        card: '0 16px 36px -10px rgba(43, 95, 230, 0.08), 0 0 1px 1px rgba(27, 31, 59, 0.04)',
        hover: '0 24px 48px -12px rgba(43, 95, 230, 0.16)',
        glow: '0 8px 24px rgba(43, 95, 230, 0.35)',
      },
    },
  },
  plugins: [],
};
