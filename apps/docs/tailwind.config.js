// tailwind.config.js
import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    './app/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@lean-org/nextui-pro/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
};

export default config;
