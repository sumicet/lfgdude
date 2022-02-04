module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                xs: { max: '600px' },
                sm: { max: '850px' },
                md: { max: '1000px' },
                lg: { max: '1250px' },
                xl: { max: '1600px' },
                '2xl': { max: '1800px' },
            },
            fontFamily: {
                text: ['Rubik', 'ui-sans-serif', 'system-ui', 'Segoe UI Symbol', 'Arial'],
                code: ['Courier Prime', 'monospace'],
            },
            fontSize: {
                base: '0.875rem',
                small: '0.75rem',
                large: '1rem',
                extraLarge: '1.5rem',
            },
            lineHeight: {
                base: '1.05rem',
                large: '1.2rem',
                small: '0.9rem',
                extraLarge: '1.8rem',
            },
            borderRadius: {
                base: '1.25rem',
            },
            colors: {
                dark: '#111112',
                medium: '#141415',
                light: '#1E1E21',
                extraLight: '#2f2f38',
                doubleExtraLight: '#34343F', // use for hovering on extraLight
                tripleExtraLight: '#3a3a4a',
                onDark: '#0D0D0D',
                accent: 'rgb(194, 0, 116)',
                textExtraLight: '#FFFFFF',
                textLight: 'rgba(255, 255, 255, 0.8)',
                textMedium: 'rgba(255, 255, 255, 0.6)',
                textDark: 'rgba(255, 255, 255, 0.4)',
                textExtraDark: 'rgba(255, 255, 255, 0.2)', // mostly for placeholders
                textDoubleExtraDark: 'rgba(255, 255, 255, 0.05)', // same as above
            },
            spacing: {
                1: '0.3125rem', // 5px
                2: '0.625rem', // 10px
                3: '0.9375rem', // 15px
                4: '1.25rem', // 20px
                5: '1.875rem', // 30px
                6: '2.5rem', // 40px
            },
            keyframes: {
                gradient: {
                    '0%': {
                        'background-position': '0%',
                    },
                    '100%': {
                        'background-position': '500%',
                    },
                },
                shake: {
                    '0%': { transform: 'rotate(0deg) scale(1)' },
                    '2.5%': { transform: 'rotate(-20deg) scale(1.1)' },
                    '5%': { transform: 'rotate(-0deg)' },
                    '7.5%': { transform: 'rotate(20deg) scale(1)' },
                    '10%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
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
