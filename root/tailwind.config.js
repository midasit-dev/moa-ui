/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	darkMode: "class",
  theme: {
    extend: {},
		colors: {
			'moa-white': '#FFFFFF',
			'moa-gray': {
				100: '#D1D1D1',
			},
			'moa-blue': {
				100: '#67AEFF',
				200: '#4B9AF4',
				300: '#3884DA',
			},
			'moa-mono': {
				100: '#5F666B',
				200: '#1E2429',
				300: '#343A3F',
			}
		},
		fontFamily: {
			'moa-primary': "Pretendard"
		},
		fontSize: {
			'moa-3xl': ['2rem', {
				lineHeight: '2.125rem',
				letterSpacing: '-0.04rem',
				fontWeight: '400'
			}],
			'moa-h1': ['0.75rem', {
				lineHeight: '0.875rem',
				letterSpacing: '-0.04rem',
				fontWeight: 'Bold'
			}],
			'moa-body1': ['0.75rem', {
				lineHeight: '0.875rem',
				letterSpacing: '-0.04rem',
				fontWeight: 'Regular'
			}],
			'moa-body2': ['0.75rem', {
				lineHeight: '0.875rem',
				letterSpacing: '-0.04rem',
				fontWeight: 'Medium'
			}],
			'moa-body3': ['0.688rem', {
				lineHeight: '0.875rem',
				letterSpacing: '-0.04rem',
				fontWeight: 'Regular'
			}],
		},
		minWidth: {
			'moa-menu': '18rem',
			'moa-content': '61rem'
		}
  },
  plugins: [],
}

