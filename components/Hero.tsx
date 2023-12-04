import HeroLottieAnimation from './HeroLottieAnimation'
import { useContext } from 'react'
import { ResumeData } from '../pages/index'
import Image from 'next/image'

type IProps = {
	isHeaderVisible: boolean
}

const Hero = ({ isHeaderVisible }: IProps) => {
	const { bio, socialLinks } = useContext(ResumeData)
	return (
		<section
			className={`custom-container min-h-screen sm:min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)] flex flex-col lg:flex-row lg:items-center justify-around p-4 lg:pb-16 w-full ${
				!isHeaderVisible && `sm:mt-14 md:mt-16`
			}`}
		>
			<div className="flex lg:flex-1 flex-col items-center justify-center gap-6 lg:min-w-104">
				<h1 className="text-6xl">Hy! I am</h1>
				<h2 className="text-4xl whitespace-nowrap font-semibold bg-gradient-to-r from-violet-600 via-red-500 to-indigo-400 inline-block text-transparent bg-clip-text">
					Akash Kumar Seth
				</h2>
				<p className="max-w-sm text-center">{bio}</p>
				<div className="flex gap-2">
					{socialLinks.map((service) => {
						return (
							<a
								target="_blank"
								rel="noreferrer"
								href={service.link}
								key={service.name}
								className="btn btn-ghost btn-circle my-2"
							>
								<Image
									height={24}
									width={24}
									src={service.image}
									alt={service.name}
									loading="lazy"
									unoptimized
								/>
							</a>
						)
					})}
				</div>
				<a href="#contact" className="btn btn-accent rounded-full">
					<div className="p-2 flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						<span className="ml-1">Contact Me</span>
					</div>
				</a>
			</div>
			<div className="hidden xs:block flex-1">
				<HeroLottieAnimation />
			</div>
		</section>
	)
}

export default Hero
