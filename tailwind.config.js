module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["corporate", "dark", "cmyk"],
  },
  plugins: [require("daisyui")],
};
