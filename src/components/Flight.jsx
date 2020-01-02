import React, { useState } from 'react'
import Modal from '../components/Modal'

const Flight = ({ data: { itineraries, price: { grandTotal, currency } } }) => {
	
	const [ isModalOpen, toggleModal ] = useState(false)

// Si pudiera hacer del fetchCity una función, este sería un muy buen lugar para usarla.

	return (
		<li>
			{itineraries.map((e, i) => {
				return (
					<div key={i} className={"destinationResults"}>
						<div className={"duration"}>{e.duration}</div>
						{e.segments.map((e, i) => (
							<div className={"destination"} key={i}>
								{`${e.departure.iataCode}  - ${e.arrival.iataCode}`}
								<img 	src={`https://content.airhex.com/content/logos/airlines_${e.carrierCode}_200_200_s.png`}
										className={"airlineIcon"} />
							</div>
						))}
					</div>
				)
			})}
	
			<div className="price">{`Precio: ${currency} ${grandTotal}`}</div>
			<button className="selectBtn" type={'button'} 
					onClick={()=>toggleModal(true)}>
					Seleccionar
			</button>
			<Modal 	isOpen={isModalOpen} 
					toggle={()=>toggleModal(false)}
					data={ {curr:currency, price:grandTotal, it:itineraries}  } 
			/>
		</li>
	)
}

export default Flight
