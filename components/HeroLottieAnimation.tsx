import { Player } from '@lottiefiles/react-lottie-player'
import animationData from '../public/lottie/man-working.json'
import { useState, useEffect, useRef } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const HeroLottieAnimation = () => {
	const [lottie, setLottie] = useState<any>(null)
	const playerRef = useRef<any>(null)

	const intersecting = useIntersectionObserver(playerRef)

	useEffect(() => {
		// remove the duplicate svg child from lottie in development this issue is due to strict mode
		setTimeout(() => {
			const lottie = playerRef.current.querySelector('#lottie')!
			if (lottie?.childNodes.length > 1) {
				lottie.removeChild(lottie.childNodes[0])
			}
		}, 100)
	}, [])

	useEffect(() => {
		if (!lottie) return
		if (intersecting) {
			lottie.play()
		} else {
			lottie.pause()
		}
	}, [intersecting, lottie])

	return (
		<div ref={playerRef}>
			<Player
				onEvent={(event) => {
					// console.log(event)
				}}
				lottieRef={(instance) => {
					setLottie(instance)
				}}
				className="w-full"
				src={animationData}
				loop
			/>
		</div>
	)
}
export default HeroLottieAnimation
