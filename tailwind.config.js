module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'budget-green': {
          500: '#3aaa35',
        },
        'budget-blue': {
          500: '#25a2f0',
        },
      },
      fontFamily: {
        londrina: ['Londrina Solid', 'sans-serif'],
      },
      boxShadow: {
        'link-button': '0 8px 0 -4px #007db7',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
