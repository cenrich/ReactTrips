import React from 'react'
import { useHistory } from 'react-router-dom'

const Flight = ({ data: { itineraries, price: { grandTotal, currency } } }) => {
	let history = useHistory()
		
	const retrieveSelection = (values) => history.push(`/selected?q=${btoa(JSON.stringify(values))}`)

	return (
		<li>
			{itineraries.map((e, i) => {
				return (
					<div key={i}>
						<div>{e.duration}</div>
						{e.segments.map((e, i) => (
							<div key={i}>
								{`${e.departure.iataCode} - ${e.arrival.iataCode}`}
							</div>
						))}
					</div>
				)
			})}
			<div>{`Precio: ${currency} ${grandTotal}`}</div>
			<button type={'button'} 
					onClick={()=>retrieveSelection(itineraries, currency, grandTotal)}>
					Seleccionar
			</button>
		</li>
	)
}

export default Flight
