/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,svelte}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [ 
			{
				light: {
					primary: '#ffe4e6',
					secondary: '#26af7d',
					accent: '#286de2',
					neutral: '#bfdbfe',
					'base-100': '#FFF',
					info: '#68A6E8',
					success: '#63E3A3',
					warning: '#F6C531',
					error: '#E74078'
				}
			}, 'dark'
		]
	},
	plugins: [require('daisyui')]
};
