import { CardMini } from './Card'
export default function ScoreScreen ({ score, bestScore, cardsHistory, onClick }) {
	let message = ''
	if (score === 12) message += ' Congratulations! This is a perfect score!'
	else if (score === bestScore) message += ' This is your best so far. Can you get all 12?'

	return (
		<div className="ScoreScreen">
			<p>Game over. You scored <span className='score'>{score}</span> out of 12. {message}</p>
			<CardsSummary cardsHistory={cardsHistory} />
			<button onClick={onClick}>Play Again</button>
		</div>
	)
}

function CardsSummary ({ cardsHistory }) {
	return (
		<>
			<p>You played the following cards: </p>
			<section className="card-container">
				{cardsHistory.map((cardData, index) =>
					<CardMini key={cardData.name + index} data=		{cardData} 	number={index + 1} />
				)}
			</section>
		</>
	)
}
