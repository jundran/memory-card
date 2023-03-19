export default function Card ({ data, onClick }) {
	return (
		<div className='Card' onClick={onClick}>
			<Common data={data}/>
		</div>
	)
}

function Common ({ data }) {
	return (
		<>
			<img src={data.url} alt={data.name} />
			<div className="card-info">
				<span>{data.name}</span>
			</div>
		</>
	)
}

export function CardMini ({ data, number }) {
	return (
		<div className={'Card CardMini'}>
			<Common data={data}/>
			<div className="number">{number}</div>
		</div>
	)
}
