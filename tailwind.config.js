/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EEEEEE",
        white: "#FFFFFF",
        purple: "#D9BBFF",
        darkBlue: "#01003C",
        lightBlue: "#8278F8",
        red: "#FF0000",
      },
    },
  },
  plugins: [],
}
