/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        '128' : '32rem',
        '148' : '44rem',
        '158' : '46.5rem',
        '0.25': '0.5px',
        '100' : '26rem'
      },
      width: {
      '128' : '32rem',
      '148' : '44rem',
      '100' : '26rem'
      },
      colors: {
        'box' : '#1f2937',
        'bgcolor' : '#111827',
        'lines' : 'rgb(93 98 109)'
      }
    },
  },
  plugins: [],
};
