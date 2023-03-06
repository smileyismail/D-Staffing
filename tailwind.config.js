const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#9CA0AC",
        customBlue: "#0066FF",
        lightBlue: "#eef1f7",
        heroBg: "#f6f5f6",
        footerBg: "#111827",
      },
    },
  },
  plugins: [],
});
