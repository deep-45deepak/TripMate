/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx,ejs}", // Ensure correct syntax
      "./views/**/*.ejs" // Include all EJS files in views folder and subfolders
    ],
    theme: {
      extend: {
        animation: {
          fadeIn: "fadeIn 1s ease-in-out",
          slideUp: "slideUp 0.5s ease-in-out"
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" }
          },
          slideUp: {
            "0%": { transform: "translateY(10px)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" }
          }
        }
      }
    },
    plugins: [],
  };
  