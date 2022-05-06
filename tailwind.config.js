module.exports = {
  content: ['./public/**/*.{html,js}', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': '#A3D8B5',
      'black': '#000',
      'grey': '#E5E5E5',
      'orange': '#F4670B',
      'light-grey': '#F2F2F2',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'muted': '#8F8F8F'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}
