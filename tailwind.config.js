/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial' : 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparentPurple: 'rgba(74, 39, 113, 0.1)',
        transparentMobileNav: 'rgba(74, 39, 113, 0.7)',
        darkPurple: 'rgba(74, 39, 113, 1)',
        hoverPurple: 'rgba(74, 39, 113, 0.2)'
      },
      height: {
        'screen-80': 'calc(100vh - 80px)'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
