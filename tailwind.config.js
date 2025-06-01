/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'chalk-white': '#F5F5F5',
        'chalk-neon': '#39FF14',
        'chalk-blue': '#4FC3F7',
        'chalk-pink': '#FF80AB',
        'chalk-yellow': '#FFEB3B',
        'blackboard-dark': '#2A3B4C',
        'blackboard-darker': '#1A2B3C',
        'blackboard-surface': '#243447',
      },
      fontFamily: {
        chalk: ['ChalkDuster', 'cursive'],
        body: ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'chalk': '0 0 8px rgba(245, 245, 245, 0.6)',
        'neon': '0 0 10px rgba(57, 255, 20, 0.7)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate 15s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'writing': 'writing 3s ease forwards',
        'dust': 'dust 2s ease-out forwards',
        'wipe': 'wipe 1s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(245, 245, 245, 0.6))' },
          '50%': { filter: 'drop-shadow(0 0 15px rgba(245, 245, 245, 0.8))' },
        },
        writing: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        dust: {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-20px) scale(0)' },
        },
        wipe: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};