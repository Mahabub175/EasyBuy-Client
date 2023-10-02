const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        'container-lg': '1000px',
      },
      colors: {
        light: '#FFFFFF', // white
        dark: '#181A1B', //black
        primary: '#0D6EFD', // blue-600
        secondary: '#8CB6F5', // blue-300
        tertiary: '#F38332', // orange
        quaternary: '#55BDC3', // bluish green
        bgPrimary: '#E5F1FF', // light-blue
        bgSecondary: '#F7FAFC', // soft-grey
      },
    },
  },
  plugins: [],
});
