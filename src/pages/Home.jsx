import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useHistory } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../pages/Home.scss'


const Home = () => {
	let history = useHistory()

	const form = {
		departure: '',
		arrival: '',
		from: '',
		to:'',
		adults:''
	}

	const getResults = (values) => history.push(`/results?q=${btoa(JSON.stringify(values))}`)
//COMPONETIZAR BIEN LOS NUEVOS ELEMENTOS (LA NAV BAR Y ESO..)
	return (
		
		<React.Fragment>

			<Navbar />
			<Header />

		<div className={"formInput"}>
				<Formik initialValues={form} onSubmit={(v) => getResults(v)}>
					{(props) => (
						<Form className={'form'}>
							<Field className={'searchInput'} name={'departure'} placeholder={'Origen:'} />
							<Field className={'searchInput'} name={'from'} type={'date'} placeholder={'DD/MM/YY'} />
							<Field className={'searchInput'} name={'arrival'} placeholder={'Destino:'} />
							<Field className={'searchInput'} name={'to'} type={'date'} placeholder={'DD/MM/YY'} />
							<Field className={'searchInput'} name={'adults'} placeholder={'Pasajeros:'} />
							<button className={'searchButton'}type={'button'} onClick={() => props.handleSubmit()}>
								>
							</button>
						</Form>
					)}
				</Formik>

			</div>
			<div className={'pageInfoExtract'}> 
				<ul className={'pageInfo'}>
					<li className={'extract'}>
						<h2>Explore the World</h2>
						<span>Start to discrover. We will help you to visit any place you can imagine</span>
					</li>
					<li className={'extract'}>
						<h2>Gifts & Rewards</h2>
						<span>Get even more from our service. Spend less and travel more</span>
					</li>
					<li className={'extract'}>
						<h2>Best prices</h2>
						<span>We are comparing hundreds travel websites to find best price for you</span>
					</li>
					<li className={'extract'}>
						<h2>24/7 Support</h2>
						<span>Contact us anytime, anywhere. We will resolve any issues ASAP</span>
					</li>
				</ul>	
			</div>

		<Footer/>
	</React.Fragment>
	)
}

export default Home
