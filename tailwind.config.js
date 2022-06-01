module.exports = {
    content: ['*',
        './Pages/**/*{.html,.js}'
    ],
    theme: {
        extend: {
            keyframes: {
                html: {
                    '0%': { width: '0%' },
                    '10%': { width: '10%' },
                    '20%': { width: '20%' },
                    '30%': { width: '30%' },
                    '40%': { width: '40%' },
                    '50%': { width: '50%' },
                    '60%': { width: '60%' },
                    '70%': { width: '65%' },
                    // '80%': { width: '50%' },
                    // '90%': { width: '60%' },
                    '100%': { width: '70%' },
                },
                css: {
                    '0%': { width: '0%' },
                    '10%': { width: '10%' },
                    '20%': { width: '20%' },
                    '30%': { width: '30%' },
                    '40%': { width: '40%' },
                    '50%': { width: '50%' },
                    '60%': { width: '55%' },
                    '70%': { width: '60%' },
                    // '80%': { width: '50%' },
                    // '90%': { width: '60%' },
                    '100%': { width: '64%' },
                },
                js: {
                    '0%': { width: '0%' },
                    '10%': { width: '10%' },
                    '20%': { width: '20%' },
                    '30%': { width: '30%' },
                    '40%': { width: '40%' },
                    '50%': { width: '45%' },
                    '60%': { width: '50%' },
                    '70%': { width: '55%' },
                    // '80%': { width: '50%' },
                    // '90%': { width: '60%' },
                    '100%': { width: '60%' },
                },
                nodejs: {
                    '0%': { width: '0%' },
                    '10%': { width: '5%' },
                    '20%': { width: '10%' },
                    '30%': { width: '12%' },
                    '40%': { width: '15%' },
                    '50%': { width: '18%' },
                    '60%': { width: '26%' },
                    '70%': { width: '30%' },
                    // '80%': { width: '50%' },
                    // '90%': { width: '60%' },
                    '100%': { width: '36%' },
                },
                react: {
                    '0%': { width: '0%' },
                    '10%': { width: '10%' },
                    '20%': { width: '20%' },
                    '30%': { width: '30%' },
                    '40%': { width: '40%' },
                    '50%': { width: '50%' },
                    '60%': { width: '60%' },
                    '70%': { width: '65%' },
                    '80%': { width: '70%' },
                    // '90%': { width: '60%' },
                    '100%': { width: '75%' },
                }
            },
            animation: {
                html: 'html 1s linear forwards',
                css: 'css 1s linear forwards',
                js: 'js 1s linear forwards',
                nodejs: 'nodejs 1s linear forwards',
                react: 'react 1s linear forwards',

            }
        },
    },
    plugins: [],
}