const { default: viteReact } = require("@vitejs/plugin-react");

module.exports = {
  content: ["./src/**/*.tsx",
  './pages/**/*.tsx',
  './components/**/*.tsx'
],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257e6'
        }
      }
    },
  },
  plugins: [],
}
