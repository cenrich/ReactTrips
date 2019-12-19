import React, { useState } from 'react'
import Modal from '../components/Modal'

const Flight = ({ data: { itineraries, price: { grandTotal, currency } } }) => {
	
	const [ isModalOpen, toggleModal ] = useState(false)

	return (
		<li>
			{itineraries.map((e, i) => {
				return (
					<div key={i} className="destinationResults">
						<div className="duration">{e.duration}</div>
						{e.segments.map((e, i) => (
							<div className="destination" key={i}>
								{`/${e.carrierCode}/ ${e.departure.iataCode}  - ${e.arrival.iataCode}`}
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
