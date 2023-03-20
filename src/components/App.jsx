import { useState } from 'react'
import '../styles/App.sass'
import Header from './Header'
import Card from './Card'
import ScoreScreen from './ScoreScreen'
import getCardData from '../data'
const orderedCards = getCardData()
const beep = new Audio('/memory-card/sounds/beep.mp3')

export default function App () {
	const [score, setScore] = useState(0)
	const [bestScore, setBestScore] = useState(0)
	const [cards, setCards] = useState(shuffleCards(true))
	const [cardsHistory, setCardsHistory]  = useState([])
	const [showScoreScreen, setShowScoreScreen] = useState(false)

	function shuffleCards (returnCards = false) {
		const shuffleSet = new Set()
		while (shuffleSet.size < 12) shuffleSet.add(Math.floor(Math.random() * 12))
		const nextCards = Array.from(shuffleSet).map(i => orderedCards[i])
		if (returnCards) return nextCards
		else setCards(nextCards)
	}

	function resetGame () {
		setCardsHistory([])
		shuffleCards()
		setScore(0)
		setShowScoreScreen(false)
	}

	function handleGameOver () {
		const actualScore = score === 11 ? 12 : score
		if (bestScore < actualScore) setBestScore(actualScore)
		setShowScoreScreen(true)
	}

	function handleClick (clickedCard) {
		beep.currentTime = 0
		beep.play()
		setCardsHistory([...cardsHistory, clickedCard])

		// Lose < 12 unique
		if (cardsHistory.find(card => card.name === clickedCard.name)) return handleGameOver()

		setScore(score + 1) // Updates on next render
		if (score === 11) handleGameOver() // Win 12 unique cards
		else shuffleCards() // Next round
	}

	return (
		showScoreScreen ?
			<ScoreScreen
				score={score}
				bestScore={bestScore}
				cardsHistory={cardsHistory}
				onClick={resetGame}
			/> :
			<>
				<Header score={score} bestScore={bestScore}/>
				<CardContainer cards={cards} onClick={handleClick} />
			</>
	)
}

function CardContainer ({ cards, onClick }) {
	return (
		<section className='card-container'>
			{cards.map(data =>
				<Card key={data.name} data={data} onClick={() => onClick(data)}/>
			)}
		</section>
	)
}
