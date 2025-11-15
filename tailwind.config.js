/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FF6B00',
          gradient: {
            from: '#0055FF',
            to: '#00D4FF',
          },
        },
      },
      fontFamily: {
        caveat: ['var(--font-caveat-brush)'],
        nunito: ['var(--font-nunito-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
