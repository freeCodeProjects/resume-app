import { useContext, useState, useEffect } from 'react'
import { ResumeData } from '../pages/index'
import Image from 'next/image'

type SkillsGroup = {
	[key: string]: { name: string; image: string }[]
}

const Skills = () => {
	const { skills } = useContext(ResumeData)
	const [skillsGroup, setSkillsGroup] = useState<SkillsGroup | null>(null)

	useEffect(() => {
		const tempSkillsGroup: SkillsGroup = {}
		skills.forEach((skill) => {
			if (skill.type in tempSkillsGroup) {
				tempSkillsGroup[skill.type].push({
					name: skill.name,
					image: skill.image
				})
			} else {
				tempSkillsGroup[skill.type] = [
					{
						name: skill.name,
						image: skill.image
					}
				]
			}
		})

		setSkillsGroup(tempSkillsGroup)
	}, [skills])

	return (
		<div>
			<section
				id="skills"
				className="custom-container flex flex-col justify-center items-center px-2 md:px-4 py-8 gap-6 md:gap-12"
			>
				<div className="bg-skills-title h-28 w-36 bg-contain bg-center bg-no-repeat flex items-center justify-center">
					<h1 className="text-5xl">Skills</h1>
				</div>
				<div className="flex w-full items-center">
					<img
						loading="lazy"
						className="w-0 md:w-1/2"
						src="/images/student_coding.png"
						alt="student coding"
					/>
					<div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center">
						{skillsGroup &&
							Object.keys(skillsGroup).map((groupKey) => (
								<div
									key={groupKey}
									className="grid grid-cols-3 gap-y-12 gap-x-8"
								>
									{skillsGroup[groupKey].map((skill) => (
										<div
											key={skill.name}
											className="flex flex-col gap-2 items-center"
										>
											<Image
												layout="raw"
												width="100%"
												height="100%"
												className="w-16 sm:w-20 lg:w-24"
												src={skill.image}
												alt={skill.name}
												loading="lazy"
												unoptimized
												placeholder="blur"
												blurDataURL={`${skill.image}&tr=n-blurred`}
											/>
											<div className="text-md text-gray-500 text-center text">
												{skill.name}
											</div>
										</div>
									))}
								</div>
							))}
					</div>
				</div>
			</section>
		</div>
	)
}
export default Skills
