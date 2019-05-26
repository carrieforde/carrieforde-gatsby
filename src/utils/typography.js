import Typography from 'typography';

const typography = new Typography({
  title: 'Carrie Forde',
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  googleFonts: [
    {
      name: 'Libre Franklin',
      styles: ['300', '400', '400i', '600', '600i']
    },
    {
      name: 'IBM Plex Mono',
      styles: ['400', '600']
    }
  ],
  headerFontFamily: ['Libre Franklin', 'sans-serif'],
  bodyFontFamily: ['Libre Franklin', 'sans-serif'],
  headerColor: '#243B53',
  bodyColor: '#334E68',
  headerWeight: 600,
  boldWeight: 600
});

export default typography;
