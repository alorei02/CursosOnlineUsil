import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        usil: {
          blue: '#0B2D5C',
          gold: '#F3B21A',
          sky: '#EAF2FF'
        }
      },
      boxShadow: {
        soft: '0 20px 50px rgba(11, 45, 92, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
