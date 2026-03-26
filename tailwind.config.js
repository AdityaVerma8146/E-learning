/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ], 
    theme: {
        extend: {
            colors: {
                'lightning-black': '#0a0e27',
                'lightning-dark': '#0f1535',
                'lightning-purple': '#6366f1',
                'lightning-blue': '#3b82f6',
                'lightning-cyan': '#06b6d4',
            },
            backgroundImage: {
                'gradient-lightning': 'linear-gradient(135deg, #0a0e27 0%, #1a1a3e 50%, #0f1535 100%)',
            },
        },
    },
    plugins: [],
}
