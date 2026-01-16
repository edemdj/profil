module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Chemins pour analyser les fichiers React
  ],
  theme: {
    extend: {
      keyframes: {
        heroZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        heroZoom: 'heroZoom 10s ease-in-out infinite', // Ajout d'une version récurrente de l'animation de zoom
        slideUp: 'slideUp 1s ease-out forwards', // Animation fluide pour apparition
        fadeIn: 'fadeIn 2s ease-in-out forwards', // Animation lente pour éléments
      },
      backgroundSize: {
        '150%': '150%', // Option pour agrandir davantage les backgrounds
        '175%': '175%',
      },
      backgroundPosition: {
        'center-top': 'center top', // Position personnalisée (si nécessaire)
        'center-bottom': 'center bottom',
      },
    },
  },
  plugins: [],
};