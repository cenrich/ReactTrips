import React, { useState, useEffect } from 'react'
import Flight from '../components/Flight'
import fetchData from '../helpers/apiCall'
import '../pages/Results.scss'
import Navbar from "../pages/Navbar"
import Header from '../pages/Header'


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

	return (


		
	
	isLoading? ( 

		<div class="load-wrapp">
		 <div class="load-7">
			 <p>Loading</p>
			 <div class="square-holder">
				 <div class="square"></div>
			 </div>
		 </div>
		</div>

 	) 
	  : (
		
		<div>
		<Navbar></Navbar>
		<Header></Header>
			
			<h2 className="flightResultsTitle">
				Encontramos {flights.length} vuelos para ir de <span> {inputData.departure} </span> a <span>{inputData.arrival} </span>
			</h2>
			<div className="resultsContainer">
					<ul className="resultList">{flights.map((f) => <Flight key={f.id} data={f} />)}</ul>
			</div>	
		</div>
	)  
	

	)
}

export default Results
