import dynamic from 'next/dynamic'
import { FormEvent, useState } from 'react'
import Alert from './Alert'

const ContactLottieAnimation = dynamic(
	() => import('./ContactLottieAnimation'),
	{
		ssr: false
	}
)
const FormSubmittedLottieAnimation = dynamic(
	() => import('./FormSubmittedLottieAnimation'),
	{
		ssr: false
	}
)

const Contact = () => {
	const [showModal, setShowModal] = useState(false)
	const [submitting, setSubmitting] = useState(false)
	const [showAlert, setShowAlert] = useState(false)
	const ALERT_DELAY = 5000

	const submitForm = async (e: FormEvent) => {
		e.preventDefault()
		const target = e.target as typeof e.target & {
			name: { value: string }
			email: { value: string }
			subject: { value: string }
			message: { value: string }
		}

		try {
			setSubmitting(true)
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: target.name.value.trim(),
					email: target.email.value.trim(),
					subject: target.subject.value.trim(),
					message: target.message.value.trim()
				})
			})

			const data = await response.json()

			if (response.ok) {
				target.name.value = ''
				target.email.value = ''
				target.subject.value = ''
				target.message.value = ''
				setShowModal(true)
			} else {
				throw new Error(data.message)
			}
		} catch (error: any) {
			setShowAlert(true)
			setTimeout(() => {
				setShowAlert(false)
			}, ALERT_DELAY)
			console.log(error.message)
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<div>
			{showAlert && <Alert delay={ALERT_DELAY} />}
			<section
				id="contact"
				className="custom-container flex flex-col justify-center items-center px-2 md:px-4 py-8 gap-6 md:gap-12"
			>
				<div className="bg-contact-title h-48 w-80 bg-contain bg-center bg-no-repeat flex items-center justify-center">
					<h1 className="text-5xl">Contact Me</h1>
				</div>
				<div className="flex w-full items-center justify-around">
					<div className="hidden lg:block lg:w-1/2">
						<ContactLottieAnimation />
					</div>
					<form
						onSubmit={submitForm}
						className="w-full lg:w-1/2 flex flex-col gap-4 items-center"
					>
						<div className="form-control w-full max-w-lg">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="Enter Name"
								className="input input-bordered input-secondary w-full max-w-lg"
								required
								minLength={3}
								maxLength={40}
							/>
						</div>
						<div className="form-control w-full max-w-lg">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="Enter Email"
								className="input input-bordered input-secondary w-full max-w-lg"
								required
								minLength={3}
								maxLength={40}
							/>
						</div>
						<div className="form-control w-full max-w-lg">
							<label className="label">
								<span className="label-text">Subject</span>
							</label>
							<input
								type="text"
								name="subject"
								placeholder="Subject"
								className="input input-bordered input-secondary  w-full max-w-lg"
								required
								minLength={3}
								maxLength={150}
							/>
						</div>
						<div className="form-control w-full max-w-lg">
							<label className="label">
								<span className="label-text">Message</span>
								<span className="label-text">Max 500 characters</span>
							</label>
							<textarea
								name="message"
								className="textarea textarea-bordered textarea-secondary h-24"
								placeholder="Message"
								required
								minLength={3}
								maxLength={500}
							/>
						</div>
						<div className="w-full max-w-lg">
							<button
								disabled={submitting}
								type="submit"
								className={`btn btn-accent self-baseline dark:disabled:bg-base-200 ${
									submitting && 'loading'
								}`}
							>
								Submit
							</button>
						</div>
					</form>
				</div>

				{/* Modal component */}
				<input
					type="checkbox"
					id="submit-modal"
					className="modal-toggle"
					checked={showModal}
					onChange={(e) => {
						setShowModal(e.target.checked)
					}}
				/>
				<label htmlFor="submit-modal" className="modal cursor-pointer">
					<label className="modal-box relative" htmlFor="">
						<label
							htmlFor="submit-modal"
							className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
						>
							✕
						</label>
						{showModal && <FormSubmittedLottieAnimation />}
						<h1 className="text-5xl font-extralight text-center mb-4">
							Thank you
						</h1>
						<h3 className="text-lg text-center">
							Got you message. Will reply within 48hrs.
						</h3>
					</label>
				</label>
			</section>
		</div>
	)
}
export default Contact
