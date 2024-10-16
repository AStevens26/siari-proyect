module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Asegúrate de incluir todas las extensiones de archivo que Tailwind debe procesar
    "./index.html",  // Incluir el archivo HTML principal si es necesario
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend:{
      display:["focus-group"]
    }
  },
};
