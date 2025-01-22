// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

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
				const data = {
					sender: {
						name: body.name,
						email: body.email
					},
					to: [
						{
							email: 'seth18765@gmail.com',
							name: 'Akash Kumar'
						}
					],
					subject: body.subject,
					htmlContent: `
					<html>
						<head></head>
						<body>
							<p style="white-space: pre-wrap;">${body.message}</p>
							<p><b>Sender:</b> ${body.email}</p>
						</body>
					</html>`
				}

				const headers = {
					accept: 'application/json',
					'Content-Type': 'application/json',
					'api-key': process.env.BREVO_API_KEY as string
				}

				const response = await fetch('https://api.brevo.com/v3/smtp/email', {
					method: 'POST',
					body: JSON.stringify(data),
					headers
				})
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
