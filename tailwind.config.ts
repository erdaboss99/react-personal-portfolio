import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				background: {
					header: {
						light: '#ffffff', // White
						dark: '#111827', // Gray 900
					},
					primary: {
						light: '#f1f5f9', // Slate 100
						dark: '#030712', // Gray 950
					},
					secondary: {
						light: '#e2e8f0', // Slate 200
						dark: '#111827', // Gray 900
					},
					accent: {
						light: '#cbd5e1', // Slate 300
						dark: '#374151', // Gray 700
					},
				},
				primary: {
					light: '#030712', // Gray 950
					dark: '#e5e7eb', // Gray 200
				},
				secondary: {
					light: '#4b5563', // Gray 600,
					dark: '#d1d5db', // Gray 300
				},
				border: {
					light: '#d1d5db', // Gray 300
					dark: '#111827', // Gray 900
				},
				accent: {
					light: '#ffffff', // White
					dark: '#111827', // Gray 900
				},
			},
		},
	},
	plugins: [],
};
