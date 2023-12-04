import { Player } from '@lottiefiles/react-lottie-player'
import { useEffect, useRef } from 'react'
import animationData from '../public/lottie/success.json'

const FormSubmittedLottieAnimation = () => {
	const playerRef = useRef<any>(null)

	useEffect(() => {
		// remove the duplicate svg child from lottie in development this issue is due to strict mode
		setTimeout(() => {
			const lottie = playerRef.current.querySelector('#lottie')!
			if (lottie?.childNodes.length > 1) {
				lottie.removeChild(lottie.childNodes[0])
			}
		}, 100)
	}, [])

	return (
		<div ref={playerRef}>
			<Player
				autoplay
				onEvent={(event) => {
					// console.log(event)
				}}
				className="max-h-48 md:max-h-80 w-full"
				src={animationData}
				keepLastFrame
			/>
		</div>
	)
}
export default FormSubmittedLottieAnimation
