import { useEffect, useState } from 'react'

const ThemeButton = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(false)

	useEffect(() => {
		if (localStorage.theme === 'dark') {
			setIsDarkTheme(true)
		}
	}, [])

	const changeTheme = () => {
		const htmlElm = document.querySelector('html')!
		if (isDarkTheme) {
			localStorage.theme = 'light'
			htmlElm.dataset.theme = 'light'
			// tailwindcss dark mode
			document.documentElement.classList.remove('dark')
		} else {
			localStorage.theme = 'dark'
			htmlElm.dataset.theme = 'dark'
			// tailwindcss dark mode
			document.documentElement.classList.add('dark')
		}
		setIsDarkTheme(!isDarkTheme)
	}

	return (
		<div className="w-6 h-6 md:w-8 md:h-8">
			<label className="swap swap-rotate">
				<input type="checkbox" checked={isDarkTheme} onChange={changeTheme} />

				<svg
					className="swap-on fill-current w-full h-full"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="swap-off fill-current w-full h-full"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			</label>
		</div>
	)
}
export default ThemeButton
