const path = require('path');
const baseDir = __dirname.replace(/\\/g, '/');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    `${baseDir}/app/**/*.{js,ts,jsx,tsx,mdx}`,
    `${baseDir}/components/**/*.{js,ts,jsx,tsx,mdx}`,
    `${baseDir}/content/**/*.{js,ts,jsx,tsx,mdx}`,
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: 'var(--color-paper)',
          2: 'var(--color-paper-2)',
          3: 'var(--color-paper-3)',
          hover: 'var(--color-paper-hover)',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          muted: 'var(--color-ink-muted)',
          faint: 'var(--color-ink-faint)',
        },
        signal: {
          DEFAULT: 'var(--color-signal)',
          hover: 'var(--color-signal-hover)',
          subtle: 'var(--color-signal-subtle)',
          text: 'var(--color-signal-text)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          subtle: 'var(--color-border-subtle)',
          strong: 'var(--color-border-strong)',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Menlo', 'monospace'],
      },
      boxShadow: {
        tactile: '2px 2px 0px 0px var(--color-ink)',
        'tactile-hover': '3px 3px 0px 0px var(--color-ink)',
        'tactile-sm': '1px 1px 0px 0px var(--color-ink)',
      },
    },
  },
  plugins: [],
};
