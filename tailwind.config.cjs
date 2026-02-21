/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Cormorant Garamond', 'Georgia', 'serif'],
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            },
            maxWidth: {
                'content': '72rem',   /* single content rail */
                'content-narrow': '40rem',
            },
            colors: {
                stone: {
                    50: '#F4F1EC',  /* soft ivory — lightest */
                    100: '#EBE8E2',  /* warm off-white */
                    200: '#DDD9D1',  /* light warm grey */
                    300: '#D0CBC2',  /* muted stone */
                    400: '#A39E96',  /* mid neutral */
                    500: '#7A756E',  /* balanced mid-tone */
                    600: '#5A5550',  /* warm mid-dark */
                    700: '#3E3A36',  /* deep warm grey */
                    800: '#2A2725',  /* warm charcoal */
                    900: '#1E1C1B',  /* deepest charcoal */
                }
            },
            lineHeight: {
                'relaxed': '1.65',
                'tight': '1.2',
            },
        },
    },
    plugins: [],
}
