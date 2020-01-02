import React, { useState, useEffect } from 'react'
import Flight from '../components/Flight'
import fetchData from '../helpers/apiCall'
import '../pages/Results.scss'
import Navbar from "../components/Navbar"
import Header from '../components/Header'

const Results = (props) => {

	const [ inputData, setInputData ] = useState ([ '' ])
	const [ flights, setFlights ] = useState([ '' ])
	const [ isLoading, toggleLoading ] = useState(true)
	const [departureCity, setDepartureCity] = useState('')
    const [arrivalCity, setArrivalCity] = useState('')
	
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

		// Claramente esto debería ser una función pero 
		// debe haber algo de promesas que no entendí
		fetch(`https://airports-dpvsjndcod.now.sh/city/${data.arrival}`)
			.then(res => res.json())
			.then(res => setArrivalCity(res.city))

		fetch(`https://airports-dpvsjndcod.now.sh/city/${data.departure}`)
			.then(res => res.json())
			.then(res => setDepartureCity(res.city))

	}, [])

	return (
	isLoading? ( 
		<div className={"load-wrapp"}>
		 <div className={"load-7"}>
			 <p>Loading</p>
			 <div className={"square-holder"}>
				 <div className={"square"}></div>
			 </div>
		 </div>
		</div>
	) 
	: (
		<div>
			<Navbar/>
			<Header/>
			<div className={"resultsContainer"}>
				<h2 className={"flightResultsTitle"}>
					Encontramos {flights.length} vuelos para ir de {departureCity} a {arrivalCity}
				</h2>
				<ul className={"resultList"}>{flights.map((f) => <Flight key={f.id} data={f} />)}</ul>
			</div>	
		</div>
	)  
)}

export default Results
