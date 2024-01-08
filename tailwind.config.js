/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        'blue-500': '#2276FC',
        'yellow-100': '#fef7da',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
    animation: {
      // Fade up and down
      "fade-up": "fade-up 0.5s",
      "fade-down": "fade-down 0.5s",
      // Tooltip
      "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    },
    keyframes: {
      // Fade up and down
      "fade-up": {
        "0%": {
          opacity: 0,
          transform: "translateY(10px)",
        },
        "80%": {
          opacity: 0.6,
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0px)",
        },
      },
      "fade-down": {
        "0%": {
          opacity: 0,
          transform: "translateY(-10px)",
        },
        "80%": {
          opacity: 0.6,
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0px)",
        },
      },
      // Tooltip
      "slide-up-fade": {
        "0%": { opacity: 0, transform: "translateY(6px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
      "slide-down-fade": {
        "0%": { opacity: 0, transform: "translateY(-6px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
}
