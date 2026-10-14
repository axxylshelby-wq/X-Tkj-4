export default {
  content: ["./index.html", "./*.{js,jsx}"],
  theme: {
    extend: {
      colors: { accent: "#2c67ed" },
      fontFamily: {
        sans: ["Open Sans", "system-ui", "sans-serif"],
        head: ["Oswald", "Impact", "sans-serif"],
      },
      keyframes: { blink: { "50%": { opacity: "0" } } },
      animation: { blink: "blink 1s steps(1) infinite" },
    },
  },
  plugins: [],
};
