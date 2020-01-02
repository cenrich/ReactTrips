import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../pages/Home.scss'

const valSchema = Yup.object().shape({
	departure: Yup.string().min(3).max(3).required(),
	arrival: Yup.string().required(),
	from: Yup.string().min(3).max(3).required(),
	to:Yup.string().required(),
	adults:Yup.number().min(1).max(8).required()
})

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

	return (
		
		<React.Fragment>

		<Navbar />
		<Header />

		<div className={"formInput"}>
			<Formik initialValues={form} 
					validationSchema={valSchema}
					onSubmit={(v) => getResults(v)}>
				{(props) => (
					<Form className={'form'}>
						<Field className={'searchInput'} name={'departure'} placeholder={'Origen:'} />
						<ErrorMessage name='departure'/>
						<Field className={'searchInput'} name={'from'} type={'date'} placeholder={'DD/MM/YY'} />
						<ErrorMessage name='from'/>
						<Field className={'searchInput'} name={'arrival'} placeholder={'Destino:'} />
						<ErrorMessage name='arrival'/>
						<Field className={'searchInput'} name={'to'} type={'date'} placeholder={'DD/MM/YY'} />
						<ErrorMessage name='to'/>
						<Field className={'searchInput'} name={'adults'} placeholder={'Pasajeros:'} />
						<ErrorMessage name='adults'/>
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
)}

export default Home
