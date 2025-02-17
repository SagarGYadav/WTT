/** @type {import('tailwindcss').Config} */
const customColors = require("./config/customColors");
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: { colors: customColors },
    fontFamily: {
      albertThin: ["AlbertSans-Thin"],
      albertExtraLight: ["AlbertSans-ExtraLight"],
      albertLight: ["AlbertSans-Light"],
      albertRegular: ["AlbertSans-Regular"],
      albertMedium: ["AlbertSans-Medium"],
      albertSemiBold: ["AlbertSans-SemiBold"],
      albertBold: ["AlbertSans-Bold"],
      albertExtraBold: ["AlbertSans-ExtraBold"],
      albertBlack: ["AlbertSans-Black"],
    },
  },
  plugins: [],
};
