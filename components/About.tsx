import Image from 'next/image'
import { useContext } from 'react'
import { ResumeData } from '../pages/index'
const About = () => {
	const { about, experiences } = useContext(ResumeData)
	return (
		<div className="bg-about dark:bg-about-dark bg-cover bg-center">
			<section
				id="about"
				className="custom-container flex flex-col justify-center items-center px-2 md:px-4 py-8 md:py-16 gap-12"
			>
				<div className="bg-about-title h-36 w-56 bg-cover bg-center flex items-center justify-center">
					<h1 className="text-5xl text-center">About</h1>
				</div>
				<div className="w-full max-w-4xl lg:max-w-6xl">
					<div className="flex gap-8 items-center flex-col lg:flex-row">
						<img
							className="border-secondary border-2 rounded-2xl flex-1 w-64 h-auto"
							src="https://ik.imagekit.io/medium/images/resume/bewakoof-com-official-_iKNFEIVthQ-unsplash%20(1)_8_JlYIXxD.jpg"
							alt="Akash Kumar Seth"
						></img>
						<div className="flex flex-col gap-8">
							<div className="flex gap-4 flex-col sm:flex-row">
								<div className="card shadow-sm flex flex-1 justify-center items-center gap-2 bg-base-200 px-16 py-8 rounded-3xl">
									<img
										loading="lazy"
										className="w-8"
										src="/images/award.svg"
										alt="student coding"
									/>
									<h3 className="text-xl font-semibold">Experience</h3>
									<p className="max-w-sm text-center">3 months</p>
									<p className="max-w-sm text-center">
										Intern Frontend Developer
									</p>
								</div>
								<div className="card shadow-sm flex flex-1 justify-center items-center gap-2 bg-base-200 px-8 py-4 rounded-3xl">
									<img
										loading="lazy"
										className="w-8"
										src="/images/school.svg"
										alt="student coding"
									/>
									<h3 className="text-xl font-semibold">Education</h3>
									<p className="max-w-sm text-center">(2015 - 2019)</p>
									<p className="max-w-sm text-center">
										B.Tech Computer Science
									</p>
								</div>
							</div>
							<div className="flex-0 whitespace-pre-line">{about}</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					{experiences.map((experience) => (
						<div
							key={experience.name}
							className="card w-full max-w-4xl lg:max-w-6xl border-accent border-4 bg-base-100"
						>
							<div className="card-body p-4">
								<div className="flex gap-4 flex-col justify-center items-center xs:flex-row xs:items-start">
									<Image
										layout="raw"
										width="100%"
										height="100%"
										className="p-2 w-24 h-24 rounded-full bg-base-200"
										src={experience.image}
										alt={experience.name}
										loading="lazy"
										unoptimized
										placeholder="blur"
										blurDataURL={`${experience.image}&tr=n-blurred`}
									/>
									<div className="flex flex-col gap-2">
										<h3 className="text-2xl">{experience.name}</h3>
										<span className="text-sm text-gray-500">
											{experience.duration}
										</span>
										<div className="whitespace-pre-line">{experience.info}</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
export default About
