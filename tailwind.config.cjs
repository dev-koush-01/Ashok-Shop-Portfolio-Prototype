module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fff5f6',
          100: '#fdecea',
          200: '#f6c7c9',
          300: '#f0a1a5',
          400: '#e06b6f',
          500: '#cf4246',
          600: '#a13741', // primary theme color
          700: '#7e2b2e',
          800: '#581d1f',
          900: '#2f0c0d',
        }
      }
    },
  },
  plugins: [],
}
