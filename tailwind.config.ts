import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'white',
        blue: {
          primary: '#15254E',
          secondary: '#3AC8EE',
        },
        red: {
          primary: '#F2411F',
        },
        grey: {
          1: '#fff',
        },
        white: {
          DEFAULT: '#FFFFFF',
          70: '#FFFFFFB2',
        },
        black: {
          DEFAULT: '#222222',
        },
        green: {
          DEFAULT: '#9FC836',
        },
        orange: {
          DEFAULT: '#FBBA18',
          light: '#FAF3E1',
        },
      },
      padding: {
        '9px': '9px',
        '18px': '18px',
        '7px': '7px',
      },
    },
  },
  plugins: [],
};
export default config;
