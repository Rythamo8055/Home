
import type {Config} from 'tailwindcss';

export default {
  darkMode: 'class', 
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['Source Code Pro', 'monospace'],
        headline: ['Source Code Pro', 'monospace'],
        code: ['Source Code Pro', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        highlight: {
          DEFAULT: 'hsl(var(--highlight))',
          foreground: 'hsl(var(--highlight-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // Direct var usage for glass to pick up from CSS
        'glass-bg': 'var(--glass-bg)',
        'glass-bg-hover': 'var(--glass-bg-hover)',
        'glass-bg-active': 'var(--glass-bg-active)',
        'glass-border': 'var(--glass-border-color)',
      },
      borderRadius: {
        lg: 'var(--radius)', 
        md: 'calc(var(--radius) - 2px)', 
        sm: 'calc(var(--radius) - 4px)', 
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(var(--glass-bg-base-rgb), 0.7) 0%, rgba(var(--glass-bg-base-rgb), 0.3) 100%)',
        'glass-gradient-dark': 'linear-gradient(135deg, rgba(30,30,46,0.7) 0%, rgba(30,30,46,0.4) 100%)', /* Explicit for AppCard */
        'glass-gradient-light': 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 100%)', /* Explicit for AppCard */
      },
      boxShadow: {
        'glass-sm': '0 1px 3px 0 rgba(var(--current-glass-shadow-base-rgb), var(--current-glass-shadow-opacity))',
        'glass-md': '0 4px 8px 0 rgba(var(--current-glass-shadow-base-rgb), var(--current-glass-shadow-opacity))',
        'glass-lg': '0 10px 20px 0 rgba(var(--current-glass-shadow-base-rgb), var(--current-glass-shadow-opacity))',
        'glass-xl': '0 15px 30px 0 rgba(var(--current-glass-shadow-base-rgb), var(--current-glass-shadow-opacity))',

        /* Catppuccin Mocha Shadows (dark theme) */
        'shadow-sm-mocha': '0 1px 2px hsla(var(--ctp-mocha-overlay0), 0.2)', 
        'shadow-md-mocha': '0 4px 6px hsla(var(--ctp-mocha-overlay0), 0.3)',
        'shadow-lg-mocha': '0 10px 15px hsla(var(--ctp-mocha-overlay0), 0.4)',
        'shadow-xl-mocha': '0 20px 25px hsla(var(--ctp-mocha-overlay0), 0.4), 0 8px 10px hsla(var(--ctp-mocha-overlay0), 0.3)',

        /* Catppuccin Latte Shadows (light theme) */
        'shadow-sm-latte': '0 1px 2px hsla(var(--ctp-latte-overlay0), 0.2)',
        'shadow-md-latte': '0 4px 6px hsla(var(--ctp-latte-overlay0), 0.3)',
        'shadow-lg-latte': '0 10px 15px hsla(var(--ctp-latte-overlay0), 0.4)',
        'shadow-xl-latte': '0 20px 25px hsla(var(--ctp-latte-overlay0), 0.4), 0 8px 10px hsla(var(--ctp-latte-overlay0), 0.3)',
      },
      backdropBlur: {
        '10': 'blur(10px)', 
        'md': 'blur(10px)',
      },
      backdropSaturate: {
        '180': 'saturate(1.8)', 
        '150': 'saturate(1.5)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'subtle-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.8', transform: 'scale(1.05)' },
        },
        'slide-in-up': {
          'from': { transform: 'translateY(100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'subtle-pulse': 'subtle-pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in-up': 'slide-in-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      transitionProperty: {
        'shadow-transform-bg': 'box-shadow, transform, background-color, background, backdrop-filter',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

    