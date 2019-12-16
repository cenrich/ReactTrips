import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useHistory } from 'react-router-dom'

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

<h1>Cheap Flights Best Deals</h1>
<h3>Search hundreds of travel sites at once</h3>

			<Formik initialValues={form} onSubmit={(v) => getResults(v)}>
				{(props) => (
					<Form className={'form'}>
						<Field className={'searchInput'} name={'departure'} placeholder={'Origen:'} />
						<Field className={'searchInput'} name={'from'} type={'date'} placeholder={'DD/MM/YY'} />
						<Field className={'searchInput'} name={'to'} type={'date'} placeholder={'DD/MM/YY'} />
						<Field className={'searchInput'} name={'arrival'} placeholder={'Destino:'} />
						<Field className={'searchInput'} name={'adults'} placeholder={'Adultos'} />
						<button className={'searchButton'}type={'button'} onClick={() => props.handleSubmit()}>
							>
						</button>
					</Form>
				)}
			</Formik>

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

<div className={'footer'}>
	<ul>
		<li>
			<a>Hotels</a>
		</li>
		<li>
			<a>Flights</a>
		</li>
		<li>
			<a>Homes</a>
		</li>
		<li>
			<a>Cars</a>
		</li>
		<li>
			<a>Experiences</a>
		</li>
		<li>
			<a>About Us</a>
		</li>
		<li>
			<a>Contact</a>
		</li>
	</ul>
</div>
		</React.Fragment>
	)
}

export default Home
