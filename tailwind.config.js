/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkCyan: "hsl(185, 75%, 39%)",
      veryDarkDesaturatedBlue: "hsl(229, 23%, 23%)",
      darkGrayishBlue: "hsl(227, 10%, 46%)",
      darkGray: "hsl(0, 0%, 59%)",
    },
    fontFamily: {
      kumbh: ["Kumbh Sans", "sans-serif"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    extend: {
      backgroundImage: {
        "pattern-bottom": "url('/bg-pattern-bottom.svg')",
        "pattern-card": "url('/bg-pattern-card.svg')",
        "pattern-top": "url('/bg-pattern-top.svg')",
      },
    },
  },
  plugins: [],
};
