import React, { useState, useEffect } from 'react'
import Flight from '../components/Flight'
import fetchData from '../helpers/apiCall'

const Results = (props) => {
	const [ inputData, setInputData ] = useState ([ '' ])
	const [ flights, setFlights ] = useState([ '' ])
	const [ isLoading, toggleLoading ] = useState(true)
	
	const getFlights = async (values) => {
		let { data } = await fetchData(values)
		setFlights(data)
		setInputData(values) //me parece que esto desvirtúa un poco la función
		toggleLoading(false)
	}
	
	useEffect(() => {
		let url = new URL(window.location.href)
		let data = JSON.parse(atob(url.searchParams.get('q')))
		getFlights(data)
	}, [])

	return isLoading ? (
		'cargando'
	) : (
		<div>
			<h1>Encontramos {flights.length} vuelos para ir 
				de {inputData.departure} a {inputData.arrival}</h1>
			<ul>{flights.map((f) => <Flight key={f.id} data={f} />)}</ul>
		</div>
	)
}

export default Results
