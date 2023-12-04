export type Resume = {
	bio: string
	about: string
	socialLinks: SocialLinks[]
	experiences: Experiences[]
	skills: Skills[]
	projects: Projects[]
}

export type SocialLinks = {
	name: string
	image: string
	link: string
}

export type Experiences = {
	name: string
	duration: string
	info: string
	image: string
}

export type Skills = {
	name: string
	image: string
	type: string
}

export type Projects = {
	name: string
	image: string
	info: string
	skills: string[]
	link: string
	repo: string
	visible: boolean
}
