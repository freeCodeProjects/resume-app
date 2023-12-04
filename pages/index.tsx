import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Client } from '@notionhq/client'
import Header from '../components/Header'
import Hero from '../components/Hero'
import {
	ListBlockChildrenResponse,
	QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'
import { createContext, useRef } from 'react'
import { Resume } from '../types/index'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export const getStaticProps: GetStaticProps = async () => {
	const notion = new Client({ auth: process.env.NOTION_KEY })
	let data: { [key: string]: any } = {}

	try {
		const pageId = process.env.PAGE_ID!
		const response = await notion.blocks.children.list({ block_id: pageId })
		//console.log(JSON.stringify(response, null, 2))
		let toggleBlocks: { [key: string]: Promise<ListBlockChildrenResponse> } = {}
		let childDatabases: { [key: string]: Promise<QueryDatabaseResponse> } = {}

		response.results.forEach(async (block) => {
			if ('type' in block) {
				if (block.type === 'toggle') {
					toggleBlocks[block.toggle.rich_text[0].plain_text] =
						notion.blocks.children.list({ block_id: block.id })
				} else if (block.type === 'child_database') {
					childDatabases[block.child_database.title] = notion.databases.query({
						database_id: block.id,
						sorts: [
							{
								property: 'order',
								direction: 'ascending'
							}
						]
					})
				}
			}
		})

		await Promise.all([
			//Parse toggle blocks
			Promise.all(Object.values(toggleBlocks)).then((values) => {
				// console.log(JSON.stringify(values, null, 2))
				let keys = Object.keys(toggleBlocks)
				for (let i = 0; i < keys.length; i++) {
					const blocks = values[i].results
					let tempBlockData = ''
					blocks.forEach((block) => {
						if ('paragraph' in block) {
							tempBlockData += block.paragraph.rich_text[0].plain_text + '\n\n'
						}
					})
					data[keys[i]] = tempBlockData.trim()
				}
			}),

			//Parse database
			Promise.all(Object.values(childDatabases)).then(async (values) => {
				// console.log(JSON.stringify(values, null, 2))
				let keys = Object.keys(childDatabases)
				for (let i = 0; i < keys.length; i++) {
					const currKey = keys[i]
					const dbData: { [key: string]: any } = []
					for (let currBlock of values[i].results) {
						const temp: any = {}
						if ('properties' in currBlock) {
							for (let key in currBlock.properties) {
								let curr = currBlock.properties[key]
								// console.log(curr)
								if (curr.type === 'files') {
									for (let file of curr.files) {
										if (file.type === 'file') {
											temp[key] = file['file'].url
										} else if (file.type === 'external') {
											temp[key] = file['external'].url
										}
									}
								} else if (curr.type === 'checkbox') {
									temp[key] = curr.checkbox
								} else if (curr.type === 'rich_text') {
									temp[key] = curr.rich_text[0].plain_text
								} else if (curr.type === 'title') {
									temp[key] = curr.title[0].plain_text
								} else if (curr.type === 'select') {
									temp[key] = curr.select?.name
								} else if (curr.type === 'url') {
									temp[key] = curr.url
								} else if (curr.type === 'multi_select') {
									let values = []
									values = curr.multi_select.map((field) => field.name)
									temp[key] = values
								}
							}
						}
						dbData.push(temp)
					}
					data[currKey] = dbData
				}
				// console.log(JSON.stringify(data, null, 2))
				return {
					props: {
						data
					}
				}
			})
		])

		return {
			props: {
				data
			}
		}
	} catch (error: any) {
		console.log(error)
		error = { message: error.body }
		return {
			props: {
				error
			}
		}
	}
}

export const ResumeData = createContext<Resume>({
	bio: '',
	about: '',
	socialLinks: [],
	experiences: [],
	skills: [],
	projects: []
})

type IProps = {
	data: Resume
}

const Home: NextPage<IProps> = ({ data }) => {
	const tempRef = useRef<HTMLDivElement>(null)
	const isHeaderVisible = useIntersectionObserver(tempRef)

	return (
		<ResumeData.Provider value={{ ...data }}>
			<div
				id="home"
				className="bg-hero dark:bg-hero-dark bg-no-repeat bg-cover bg-center overflow-hidden m-0"
			>
				<Header isHeaderVisible={isHeaderVisible} />
				{/* div to check header is shown or hidden intersection */}
				<div ref={tempRef}></div>
				<Hero isHeaderVisible={isHeaderVisible} />
			</div>
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</ResumeData.Provider>
	)
}

export default Home
