// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.vue", "./src/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        robotoRegular: ["Roboto Regular", ...defaultTheme.fontFamily.sans],
        robotoBold: ["Roboto Bold", ...defaultTheme.fontFamily.sans],
        montserratRegular: ["Montserrat Regular"],
        montserratExtraBold: ["Montserrat ExtraBold"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  outputDir: "dist", // Thư mục đầu ra cho các tệp tĩnh
  publicPath: "/",
};
