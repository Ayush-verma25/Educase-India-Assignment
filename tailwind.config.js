/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'popx-purple': '#6C25FF',
        'popx-light-purple': '#F7F1FF',
      }
    }
  },
  plugins: [],
};
