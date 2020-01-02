import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../components/Modal.scss'

const Modal = ({ isOpen, toggle, data:{ curr, price, it }})=>{
       
    let history = useHistory()
    
    const confirm = (values) => history.push(`/success?q=${btoa(JSON.stringify(values))}`)

    return (
        <div className={`modal ${isOpen?'open':''}`}>
            < div className={'modal-container'}>
                <p>¡Esta opción es la mejor!</p>
                {it.map((e, i) => {
				return (
					<div key={i} className={"select"}>
						<div className={"select2"}>{e.duration}</div>
						{e.segments.map((e, i) => (
							<div className={"select3"} key={i}>
								{`${e.departure.iataCode} - ${e.arrival.iataCode}`}
							</div>
						))}
					</div>
				)
			})}
				<div className={"select4"}>{`Precio: ${curr} ${price}`}</div>
                <div className={"selectionBtn"}>
                <button type='button' onClick={toggle}>Volver</button>
                <button type='button' onClick={()=>confirm()}>Seguir</button>
                </div>

            </div>
        </div>
    )
}

export default Modal
