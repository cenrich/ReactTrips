import React, { useState, useEffect } from 'react'
import Flight from '../components/Flight'
import fetchData from '../helpers/apiCall'
import '../pages/Results.scss'



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
			<nav className='mainNavbar'>
				<ul>
					<li><a href={'#'}>LOGO</a></li>
					<li><a href={'#'}>Home</a></li>
					<li><a href={'#'}>About</a></li>
					<li><a href={'#'}>Portfolio</a></li>
					<li><a href={'#'}>Services</a></li>
					<li><a href={'#'}>Contact</a></li>
					<li className={'myAccount'}><a href={'#'}>My Account</a></li>
				</ul>
	 		</nav>
			<div className="mainTitles">
				<h1>Cheap Flights Best Deals</h1>
				<h3>Search hundreds of travel sites at once</h3>
			</div>	
			<h2 className="flightResultsTitle">Encontramos {flights.length} vuelos para ir 
				de {inputData.departure} a {inputData.arrival}</h2>
			<ul className="resultList">{flights.map((f) => <Flight key={f.id} data={f} />)}</ul>
		</div>
	) 
	

	)
}

export default Results
