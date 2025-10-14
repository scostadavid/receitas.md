/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        foreground: '#ffffff',
        border: '#888888',
        card: '#1a1a1a',
        'muted-foreground': '#999999',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: [
    'bg-background',
    'text-foreground',
    'border-border',
    'bg-card',
    'text-muted-foreground',
  ],
};
