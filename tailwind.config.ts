
import type {Config} from 'tailwindcss';

export default {
  darkMode: 'class', // Changed from ['class'] to 'class' for simplicity with ThemeProvider
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
        lg: 'var(--radius)', // 0.75rem / 12px
        md: 'calc(var(--radius) - 2px)', // 10px
        sm: 'calc(var(--radius) - 4px)', // 8px
      },
      backgroundImage: {
        // Updated to use CSS variables for themeable gradients
        'glass-gradient': 'linear-gradient(135deg, rgba(var(--glass-bg-base-rgb), 0.4) 0%, rgba(var(--glass-bg-base-rgb), 0.2) 100%)',
      },
      boxShadow: {
        // Using CSS variable for shadow color to make it themeable
        'sm-themed': '0 1px 2px 0 rgba(var(--glass-shadow-color-rgb), 0.2)',
        'md-themed': '0 4px 6px -1px rgba(var(--glass-shadow-color-rgb), 0.3), 0 2px 4px -2px rgba(var(--glass-shadow-color-rgb), 0.3)',
        'lg-themed': '0 10px 15px -3px rgba(var(--glass-shadow-color-rgb), 0.3), 0 4px 6px -2px rgba(var(--glass-shadow-color-rgb), 0.3)',
        'xl-themed': '0 20px 25px -5px rgba(var(--glass-shadow-color-rgb), 0.3), 0 8px 10px -6px rgba(var(--glass-shadow-color-rgb), 0.3)',
        'glass': '0 10px 15px -3px rgba(var(--glass-shadow-color-rgb), 0.3), 0 4px 6px -2px rgba(var(--glass-shadow-color-rgb), 0.3)',
      },
      backdropBlur: {
        '10': 'blur(10px)', // Standardized blur
      },
      backdropSaturate: {
        '180': 'saturate(1.8)', // Standardized saturate
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
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' },
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
        'subtle-pulse': 'subtle-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in-up': 'slide-in-up 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
