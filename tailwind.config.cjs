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
		extend: {
			spacing: {
				1: '8px',
				1.5: '12px',
				2: '16px',
				3: '24px',
				4: '32px',
				5: '40px',
				6: '48px',
				7: '56px',
				8: '64px',
				9: '72px',
				10: '80px'
			}
		}
	},
	plugins: [require('daisyui')]
};
