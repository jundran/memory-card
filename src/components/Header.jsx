export default function Header ({ score, bestScore }) {
	return (
		<header className='Header'>
			<h1>Memory Card Game</h1>
			<p>
			There are 12 character cards. Click each one in turn without clicking on a previously selected card.
			</p>
			<div className='score'>
				<span>Score: {score} / 12</span>
				<span>Best score: {bestScore} / 12</span>
			</div>
		</header>
	)
}
