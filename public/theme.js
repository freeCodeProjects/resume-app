;(function initTheme() {
	const htmlElm = document.querySelector('html')
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		localStorage.theme = 'dark'
		htmlElm.dataset.theme = 'dark'
		// tailwindcss dark mode
		document.documentElement.classList.add('dark')
	} else {
		localStorage.theme = 'light'
		htmlElm.dataset.theme = 'light'
		// tailwindcss dark mode
		document.documentElement.classList.remove('dark')
	}
})()
