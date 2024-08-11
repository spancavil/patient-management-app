import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                fadeinout: 'fadein 0.5s, fadeout 0.5s 3s',
                spin: 'spin 2s linear infinite',
            },
            keyframes: {
                fadein: {
                    from: { bottom: '0', opacity: '0' },
                    to: { bottom: '30px', opacity: '1' },
                },
                fadeout: {
                    from: { bottom: '30px', opacity: '1' },
                    to: { bottom: '0', opacity: '0' },
                },
                spin: {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
            },
        },
    },
    plugins: [],
}
export default config
