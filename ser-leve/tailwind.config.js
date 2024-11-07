/** @type {import('tailwindcss').Config} */// cSpell:disable-line
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
  colors: {
  'twitter-blue': '#1da1f2',
  'twitter-black': '#14171a',
  'twitter-dark-gray': '#657786',
  'twitter-light-gray': '#aab8c2',
  'twitter-extra-light-gray': '#e1e8ed',
  'twitter-background': '#15202b',
  },
  },
  },
  plugins: [],
  }