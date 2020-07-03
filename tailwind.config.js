module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      gray: {
        100: "#EBF4F6",
        200: "#9BB9C6",
        300: "#626B6E",
        400: "#173E4F",
        500: "#00202C",
      },
      primary: {
        100: "#FEF3E2",
        200: "#FDC471",
        300: "#FCAD38",
        400: "#FC9600",
        500: "#EB6514",
      },
      white: "#fff",
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
