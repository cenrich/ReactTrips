import React from 'react'

const Flight = ({ data: { itineraries, price: { grandTotal, currency } } }) => (
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
		<button type={'button'} onClick={() => console.log('hola')}>Seleccionar</button>
	</li>
)

export default Flight
