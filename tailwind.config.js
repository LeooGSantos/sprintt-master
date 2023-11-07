module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'porto-seguro-blue': '#0077b6', // Substitua o código de cor pelo desejado
        'porto-seguro-red': '#ef233c',
        'porto-seguro-amber': '#ffbf00',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hover-bg-porto-seguro-amber:hover': {
          'background-color': '#ffbf00',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
