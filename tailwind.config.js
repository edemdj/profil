module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Remplacez selon la structure de vos fichiers
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
