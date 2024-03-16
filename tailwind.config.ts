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
                'green-900': '#015F43',

                'red-500': '#F75A68',

                'gray-50': '#E6E6EA',
                'gray-100': '#E4E4E8',
                'gray-200': '#E1E1E6',
                'gray-300': '#C4C4CC',
                'gray-400': '#7C7C8A',
                'gray-500': '#323238',
                'gray-600': '#29292E',
                'gray-700': '#202024',
                'gray-800': '#121214',
                'gray-900': '#101012',
                'gray-950': '#0F0F10',
            },
        },
    },
    plugins: [],
}
