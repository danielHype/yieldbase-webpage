import baseConfig from "./baseconfig.config";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  presets: [baseConfig],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'chart-grow': 'chart-grow 2s ease-out forwards',
      },
      colors: {
        'neon-green': '#03B204',
        'neon-blue': '#0abdc6',
      },
      keyframes: {
        'chart-grow': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'pulse-fast': {
          '0%, 100%': { opacity: "1" },
          '50%': { opacity: "0.5" },
        },
        'ping': {
          '0%': { transform: 'scale(1)', opacity: "1" },
          '75%, 100%': { transform: 'scale(1.5)', opacity: "0" },
        },
      },

    },
  },
} satisfies Config;
