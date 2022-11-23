/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	daisyui: {
		themes: [
			{
				light: {
					primary: '#FF470A',
					secondary: '#D926A9',
					accent: '#F3F4F6',
					neutral: '#191D24',
					'base-100': '#ffffff',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			},
			'dark'
		]
	},
	theme: {
		fontFamily: {
			sans: ['"Inter"', 'sans-serif']
		},
		extend: {}
	},
	plugins: [require('daisyui')]
};
