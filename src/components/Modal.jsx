import React from 'react'
import '../components/Modal.scss'

const Modal = ({ isOpen, toggle, data:{ curr, price, it }})=>{
    return (
        <div className={`modal ${isOpen?'open':''}`}>
            < div className='modal-container'>
                <p>¡Esta opción es la mejor!</p>
                {it.map((e, i) => {
				return (
					<div key={i} className="elegir">
						<div className="elegir2">{e.duration}</div>
						{e.segments.map((e, i) => (
							<div className="elegir3" key={i}>
								{`${e.departure.iataCode} - ${e.arrival.iataCode}`}
							</div>
						))}
					</div>
				)
			})}
				<div className="elegir4">{`Precio: ${curr} ${price}`}</div>
                <button type='button' onClick={toggle}>Volver</button>
                <button type='button' onClick={()=>console.log('prácticamente ahí')}>Seguir</button>

            </div>
        </div>
    )
}

export default Modal
