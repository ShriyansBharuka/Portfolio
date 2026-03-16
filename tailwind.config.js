/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Orbitron'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["'Syne'", "sans-serif"],
      },
      colors: {
        bg: "#030712",
        surface: "#0d1117",
        cyan: { DEFAULT: "#06d6f7", dark: "#0891b2" },
        violet: { DEFAULT: "#a855f7", dark: "#7c3aed" },
        emerald: { DEFAULT: "#10f0a0", dark: "#059669" },
        rose: { DEFAULT: "#ff2d6b" },
      },
      animation: {
        glitch: "glitch 3s infinite",
        float: "float 6s ease-in-out infinite",
        pulse2: "pulse2 2s cubic-bezier(0.4,0,0.6,1) infinite",
        scanline: "scanline 8s linear infinite",
        rotate: "spin 20s linear infinite",
      },
      keyframes: {
        glitch: {
          "0%,100%": { textShadow: "2px 0 #06d6f7, -2px 0 #ff2d6b" },
          "25%": { textShadow: "-3px 0 #a855f7, 3px 0 #10f0a0" },
          "50%": { textShadow: "3px 0 #ff2d6b, -3px 0 #06d6f7" },
          "75%": { textShadow: "-2px 0 #10f0a0, 2px 0 #a855f7" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse2: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0.4 },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
}
