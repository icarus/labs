/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          25: "#FCFCFC",
          50: "#F7F7F8",
          100: "#EFEFF1",
          200: "#DCDCE0",
          300: "#CCCCD1",
          400: "#B9B9C0",
          500: "#A9A9B2",
          600: "#838390",
          700: "#63636E",
          800: "#414149",
          900: "#222226",
          950: "#18181B",
        },
        yellow: {
          50: "#FFFFF0",
          100: "#FEFEE1",
          200: "#FFFDB6",
          300: "#FDFDA5",
          400: "#FDFD87",
          500: "#FCFB6A",
          600: "#FBFB23",
          700: "#D2D204",
          800: "#8C8C03",
          900: "#464601",
          950: "#232301",
        },
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(.23, 1, .32, 1)",
      }
    },
  },
  plugins: [],
};
