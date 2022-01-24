module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
            boxShadow: {},
            fontFamily: {
                text: 'Rubik, Arial, sans-serif',
                code: 'Courier Prime, monospace',
            },
            fontSize: {
                base: '0.875rem',
                small: '0.75rem',
                large: '1rem',
            },
            lineHeight: {
                base: '120%',
            },
            borderRadius: {
                base: '1.25rem',
            },
            colors: {
                dark: '#111112',
                medium: '#141415',
                light: '#1E1E21',
                extraLight: '#34343F',
                onDark: '#0D0D0D',
                accent: '#5200FF',
                textExtraLight: '#FFFFFF',
                textLight: 'rgba(255, 255, 255, 0.8)',
                textMedium: 'rgba(255, 255, 255, 0.6)',
                textDark: 'rgba(255, 255, 255, 0.4)',
                textExtraDark: 'rgba(255, 255, 255, 0.2)', // mostly for placeholders
            },
            spacing: {
                1: '0.3125rem',
                2: '0.625rem',
                3: '0.9375rem',
                4: '1.25rem',
                5: '1.875rem',
                6: '2.5rem',
            },
        },
    },
    plugins: [],
};

// 10px = 0.625rem
// 12px = 0.75rem
// 14px = 0.875rem
// 16px = 1rem (base)
// 18px = 1.125rem
// 20px = 1.25rem
// 24px = 1.5rem
// 30px = 1.875rem
// 32px = 2rem
