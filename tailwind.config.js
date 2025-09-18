/** @type {import('tailwindcss').Config} */

import neumorphism from 'tailwindcss-neumorphism';

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    plugins: [
        neumorphism(),
    ],
}