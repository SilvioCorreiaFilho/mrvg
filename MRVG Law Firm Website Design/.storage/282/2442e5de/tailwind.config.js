/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        cloud1: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(1000%)' }
        },
        cloud2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(1000%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'cloud-1': 'cloud1 120s linear infinite',
        'cloud-2': 'cloud2 180s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
