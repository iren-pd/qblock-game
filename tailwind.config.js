/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'move-cat': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(calc(100vw - 100px))' },
        },
      },
      animation: {
        'move-cat': 'move-cat 10s linear infinite',
      },
    },
  },
  plugins: [],
};
