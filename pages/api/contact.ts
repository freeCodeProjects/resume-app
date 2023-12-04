// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

type ContactData = {
	name: string
	email: string
	subject: string
	message: string
}

export default async function handler(
	req: NextApiRequest & { body: ContactData },
	res: NextApiResponse
) {
	const { method } = req
	const body: ContactData = req.body
	switch (method) {
		case 'POST':
			try {
				const response = await newEntryToDatabase(
					body.name,
					body.email,
					body.subject,
					body.message
				)
				return res.status(200).send(response)
			} catch (error) {
				// console.log(error)
				return res.status(400).send(error)
			}
		default:
			res.setHeader('Allow', ['POST'])
			return res.status(405).end(`Method ${method} Not Allowed`)
	}
}

const newEntryToDatabase = async function (
	name: string,
	email: string,
	subject: string,
	message: string
) {
	const notion = new Client({ auth: process.env.NOTION_KEY })

	return notion.pages.create({
		parent: {
			database_id: process.env.CONTACT_DB as string
		},
		properties: {
			Name: {
				title: [
					{
						text: {
							content: name
						}
					}
				]
			},
			Email: {
				email
			},
			Subject: {
				rich_text: [
					{
						text: {
							content: subject
						}
					}
				]
			},
			Message: {
				rich_text: [
					{
						text: {
							content: message
						}
					}
				]
			}
		}
	})
}
