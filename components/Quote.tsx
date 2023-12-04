import styles from '../styles/modules/Quote.module.css'
const Quote = () => {
	return (
		<div className="flex items-center flex-col">
			<blockquote className={styles.blockquote}>
				A portion of your struggle is a waste, if people after you are repeating
				the same mistake.
			</blockquote>
			<cite className={styles.cite}>- Akash Kumar Seth</cite>
		</div>
	)
}
export default Quote
