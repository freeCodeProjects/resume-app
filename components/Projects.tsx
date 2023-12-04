import { useContext } from 'react'
import { ResumeData } from '../pages/index'
import Image from 'next/image'

const Projects = () => {
	const { projects } = useContext(ResumeData)

	return (
		<div>
			<section
				id="projects"
				className="custom-container flex flex-col justify-center items-center px-2 md:px-4 py-8 gap-6 md:gap-12"
			>
				<div className="bg-projects-title h-56 w-56 bg-cover bg-center flex items-center justify-center">
					<h1 className="text-5xl text-center">Projects</h1>
				</div>
				<div className="flex gap-6 md:gap-12 flex-wrap justify-center">
					{projects.map(
						(project) =>
							project.visible && (
								<div
									key={project.name}
									className="card card-compact w-72 md:w-80 xl:w-96 bg-base-200 shadow-xl"
								>
									<Image
										layout="raw"
										width="100%"
										height="62.5%"
										className="w-full"
										src={project.image}
										alt={project.name}
										loading="lazy"
										unoptimized
										placeholder="blur"
										blurDataURL={`${project.image}&tr=n-blurred`}
									/>
									<div className="card-body flex flex-col gap-4 justify-between">
										<h2 className="card-title">{project.name}</h2>
										<p>{project.info}</p>
										<div className="flex gap-2 flex-wrap">
											{project.skills.map((skill, index) => (
												<div
													key={index}
													className="badge badge-warning h-6 text-xs"
												>
													{skill}
												</div>
											))}
										</div>
										<div className="card-actions justify-between">
											<a
												target="_blank"
												rel="noreferrer"
												href={project.link}
												className="btn rounded md:rounded-xl gap-2 btn-accent min-h-8 h-10 p-2 md:min-h-12 md:h-12 md:p-3"
											>
												Preview
												<svg
													width={24}
													height={24}
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M7 17L17 7M7 7h10v10"
														stroke="currentColor"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</a>
											{project.repo && (
												<a
													target="_blank"
													rel="noreferrer"
													href={project.repo}
													className="btn rounded md:rounded-xl gap-2 btn-neutral min-h-8 h-10 p-2 md:min-h-12 md:h-12 md:p-3"
												>
													<svg
														width={22}
														height={23}
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M15 22v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0019 4.77 5.07 5.07 0 0018.91 1S17.73.65 15 2.48a13.38 13.38 0 00-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 004 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 008 18.13V22m0-3c-5 1.5-5-2.5-7-3l7 3z"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
													Github
												</a>
											)}
										</div>
									</div>
								</div>
							)
					)}
				</div>
			</section>
		</div>
	)
}
export default Projects
