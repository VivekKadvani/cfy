/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // Configure your color palette here
      'pink': '#F20D7B',
      'dim_black': '#1A1A1D',
      'white_text': '#D9D9E2',
      'grey': '#303030',
      'green': '#0aeb02',
      'red': '#fc142b',
      'light_pink': '#fff0f8',
      'grey_dark': '#3C3C4399',
      'white': '#ffffff',
      'desc': '#787878',
      'gradiant1': 'linear-gradient(to right, #430089, #82ffa1)'

    },
    fontFamily: {
      'vesting': ['Bruno Ace SC', 'Georgia, Cambria', 'Times New Roman', 'Times', 'serif'],
      'form': ['Bruno Ace', 'cursive',]
    },
    dropShadow: {
      '3xl': '0  5px 10px rgba(242, 13, 123, 1)',
      'dark': '0  5px 10px rgba(230, 230, 230, 1)'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
