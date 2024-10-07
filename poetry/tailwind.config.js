/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
    fontFamily: {
      sans: ['"Inter var", sans-serif'],
    },
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 90s linear infinite",
      },
      backgroundImage: {
        hero1: "url('./src/images/pexels-chuck-3616498.jpg')", 
        texture: "url('./src/images/bg-texture.png')", 
      },
    },
  },
  plugins: [],
};
