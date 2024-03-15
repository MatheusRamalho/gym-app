/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            fontFamily: {
                heading: 'Roboto_700Bold',
                body: 'Roboto_400Regular',
            },
            spacing: {
                38: 148,
            },
            colors: {
                'green-500': '#00B37E',
                'green-700': '#00875F',
                'red-500': '#F75A68',
                'gray-100': '#E1E1E6',
                'gray-200': '#C4C4CC',
                'gray-300': '#7C7C8A',
                'gray-400': '#323238',
                'gray-500': '#29292E',
                'gray-600': '#202024',
                'gray-700': '#121214',
            },
        },
    },
    plugins: [],
}
