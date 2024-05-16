/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
      screens: {
        origin: "800px",
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        typewriter: 'typewriter 4s steps(44) 3.5s 1 normal both',
      },
    },
  },
  plugins: [],
};
