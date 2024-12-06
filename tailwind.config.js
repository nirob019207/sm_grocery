/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); // Import defaultTheme

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Add paths to your content files
  theme: {
    extend: {
      colors: {
        'dark-bg': '#212337', 
        'green-title':'#749B3F',
        'image_bac':'#F4F6F6'
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif', ...defaultTheme.fontFamily.sans], // Adding Montserrat as the primary font
      },
      container: {
        center: true, // Center the container
        padding: '1rem', // Apply 1rem padding on all screens
        screens: {
          xl: '1200px', // Set max-width for 'xl' to 1200px
          '2xl': '1400px', // Set max-width for '2xl' to 1400px
        },
      },
    },
  },
  plugins: [],
};
