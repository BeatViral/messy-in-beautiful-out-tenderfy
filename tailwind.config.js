/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#07131F',
        structural: '#0B2235',
        engineering: '#0E4A4A',
        signal: '#C9FF72',
        blueprint: '#63E6FF',
        amber: '#FFB866',
        mineral: '#F5F3EA',
        steel: '#A7B4BE',
        ink: '#05090D',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
