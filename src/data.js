const characters = [
	'alien',
	'alligator',
	'astronaut',
	'cat',
	'chicken',
	'dinosaur',
	'dragon',
	'koala',
	'owl',
	'penguin',
	'rabbit',
	'turtle'
]

export default function getCardData () {
	return characters.map(character => {
		return {
			name: character.charAt(0).toUpperCase() + character.slice(1),
			url: `/characters/${character}.jpg`
		}
	})
}
