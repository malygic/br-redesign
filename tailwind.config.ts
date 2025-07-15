import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"], // Upraveno pro použití s next/font
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config```

#### 2. Aktualizujte globální CSS soubor (`src/app/globals.css`)

Otevřete `src/app/globals.css` a **nahraďte celý jeho obsah** tímto kódem:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 257 65% 5%; /* #0F0520 */
    --foreground: 0 0% 100%; /* #FFFFFF */

    --card: 257 65% 5%;
    --card-foreground: 0 0% 100%;

    --popover: 257 65% 5%;
    --popover-foreground: 0 0% 100%;

    --primary: 261 95% 82%; /* #B47CFD */
    --primary-foreground: 257 65% 5%;

    --secondary: 329 100% 87%; /* #FF7FC2 */
    --secondary-foreground: 257 65% 5%;
    
    --muted: 258 19% 18%; /* #241A30 */
    --muted-foreground: 262 13% 66%; /* #9B96B0 */

    --accent: 29 100% 74%; /* #FFB07B */
    --accent-foreground: 257 65% 5%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;

    --border: 259 20% 18%; /* #2B2338 */
    --input: 259 20% 18%;
    --ring: 261 95% 82%; /* #B47CFD */

    --radius: 1rem;
  }

  .dark {
    /* Všechny proměnné jsou již definovány v :root pro náš dark-first design */
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}