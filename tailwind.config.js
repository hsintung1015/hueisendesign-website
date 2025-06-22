/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'SimSun', '宋体', 'NSimSun', '新宋体', 'sans-serif'],
        'serif': ['SimSun', '宋体', 'NSimSun', '新宋体', 'FangSong', '仿宋', 'serif'],
        'en': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'zh': ['SimSun', '宋体', 'NSimSun', '新宋体', 'serif'],
        'numeric': ['SF Pro Rounded', 'Avenir Next Rounded', 'Helvetica Neue', 'Nunito', 'Roboto', 'system-ui', '-apple-system', 'sans-serif'],
        'rounded': ['SF Pro Rounded', 'Avenir Next Rounded', 'Helvetica Neue', 'Nunito', 'Roboto', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
