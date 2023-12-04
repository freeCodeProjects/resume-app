module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
					primary: '#3730a3',
					secondary: '#86198f',
					accent: '#115e59',
					neutral: '#3d4451',
					success: '#2dc653',
					info: '#0077b6',
					warning: '#fdc43f',
					error: '#bf0603',
					'base-content': '#000000',
					'accent-content': '#ffffff',
					'success-content': '#ffffff',
					'info-content': '#ffffff',
					'warning-content': '#ffffff',
					'error-content': '#ffffff',
					'--rounded-box': '0.5rem', // border radius rounded-box utility class, used in card and other large boxes default: 1rem
					'--rounded-btn': '0.25rem' // border radius rounded-btn utility default: 0.5rem
				}
			},
			{
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					'base-300': '#334155',
					'base-200': '#1e293b',
					'base-100': '#0f172a',
					'base-content': '#ffffff',
					'neutral-content': '#ffffff',
					'--rounded-box': '0.5rem', // border radius rounded-box utility class, used in card and other large boxes default: 1rem
					'--rounded-btn': '0.25rem' // border radius rounded-btn utility default: 0.5rem
				}
			}
		]
	},
	theme: {
		extend: {
			screens: {
				xs: '480px'
			},
			maxHeight: {
				100: '25rem',
				104: '26rem',
				108: '27rem',
				112: '28rem',
				128: '32rem',
				136: '34rem',
				144: '36rem'
			},
			minWidth: {
				100: '25rem',
				104: '26rem',
				108: '27rem',
				112: '28rem',
				128: '32rem',
				136: '34rem',
				144: '36rem'
			},
			backgroundImage: {
				hero: "url('/images/bg/hero.svg')",
				about: "url('/images/bg/about.svg')",
				footer: "url('/images/bg/footer.svg')",
				'about-title': "url('/images/bg/about-title.svg')",
				'skills-title': "url('/images/bg/skills-title.svg')",
				'projects-title': "url('/images/bg/projects-title.svg')",
				'contact-title': "url('/images/bg/contact-title.svg')",
				'hero-dark': "url('/images/bg/hero-dark.svg')",
				'about-dark': "url('/images/bg/about-dark.svg')",
				'footer-dark': "url('/images/bg/footer-dark.svg')"
			},
			keyframes: {
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-200px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out-up': {
					from: {
						opacity: '1',
						transform: 'translateY(0px)'
					},
					to: {
						opacity: '0',
						transform: 'translateY(-200px)'
					}
				}
			},
			animation: {
				'fade-in-down': 'fade-in-down 0.5s ease-out',
				'fade-out-up': 'fade-out-up 0.5s ease-out'
			}
		}
	}
}
