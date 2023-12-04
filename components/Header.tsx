import styles from '../styles/modules/Header.module.css'
import ThemeButton from './ThemeButton'

type IProps = {
	isHeaderVisible: boolean
}

const Header = ({ isHeaderVisible }: IProps) => {
	return (
		<div>
			<header
				className={`${
					!isHeaderVisible &&
					`fixed top-0 z-10 backdrop-blur-xl bg-base-100/80 shadow-sm w-full`
				}`}>
				{/* navbar for tablet and desktop */}
				<nav className="custom-container xs:flex justify-between p-4  items-center hidden">
					<div className="flex gap-8">
						<a href="#home" className={styles.navItem}>
							Home
						</a>
						<a href="#about" className={styles.navItem}>
							About
						</a>
						<a href="#skills" className={styles.navItem}>
							Skills
						</a>
						<a href="#projects" className={styles.navItem}>
							Projects
						</a>
						<a href="#contact" className={styles.navItem}>
							Contact
						</a>
					</div>
					<ThemeButton />
				</nav>
			</header>
			{/* navbar for mobile  */}
			<div className="fixed w-screen bottom-0 z-10 bg-base-100 shadow-xl xs:hidden">
				<nav className="flex justify-around p-4 items-center">
					<a href="#home" className={`px-2 ${styles.navItem}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
					</a>
					<a href="#about" className={styles.navItem}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</a>
					<a href="#skills" className={styles.navItem}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
							/>
						</svg>
					</a>
					<a href="#projects" className={styles.navItem}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
							/>
						</svg>
					</a>
					<a href="#contact" className={styles.navItem}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
							/>
						</svg>
					</a>
					<ThemeButton />
				</nav>
			</div>
		</div>
	)
}
export default Header
