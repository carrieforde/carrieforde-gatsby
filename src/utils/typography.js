import Typography from "typography"
// import CodePlugin from "typography-plugin-code"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.75,
  googleFonts: [
    {
      name: "Libre Franklin",
      styles: ["300", "400", "400i", "600", "600i"],
    },
    {
      name: "IBM Plex Mono",
      styles: ["400"],
    },
  ],
  headerFontFamily: ["Libre Franklin", "sans-serif"],
  bodyFontFamily: ["Libre Franklin", "sans-serif"],
  headerWeight: 600,
  boldWeight: 600,
  scaleRatio: 3,
})

export default typography
