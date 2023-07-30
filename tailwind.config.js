/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/testimonials/*.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['League Spartan', 'Arial', 'sans-serif'],
      },
      colors: {
        "custom-dark-magenta": "hsl(300, 43%, 22%)",
        "custom-pink": "hsl(333, 80%, 67%)",
        "custom-light-magenta": "hsl(300, 24%, 96%)",
        "custom-magenta": "hsl(303, 10%, 53%)"
      }
    },
  },
  plugins: [],
}

