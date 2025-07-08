module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          500: '#06B6D4',
          300: '#67E8F9',
        },
        primary: '#06B6D4', // Teal primary
        secondary: '#22D3EE', // Teal secondary
        accent: '#67E8F9', // Teal accent
        background: '#000000', // Black background
        foreground: '#FFFFFF', // White text
        muted: '#1E293B', // For muted-foreground
        'muted-foreground': '#9CA3AF', // Gray-400
        border: '#4B5563', // Gray-600
        card: '#111827', // Gray-900
        ring: '#06B6D4', // Teal for focus rings
      },
    },
  },
  plugins: [],
};