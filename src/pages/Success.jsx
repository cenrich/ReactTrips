import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../pages/Success.scss'
import Navbar from "../components/Navbar"

const payValidSchema = Yup.object().shape({
	firstName:Yup.string().min(3).max(20).required(),
	lastName:Yup.string().min(3).max(20).required(),
	birthDay:Yup.string().required(),
	passport:Yup.number().min(1).max(20).required(),
	address:Yup.string().required(),
	city:Yup.string().min(3).max(20).required(),
	cardName:Yup.string().min(3).max(50).required(),
	cardNr:Yup.number().min(16).max(16).required(),
	cardExpDate:Yup.string().required()
})


const Success = () =>{
	const form = {
		firstName:'',
		lastName:'',
		birthDay:'',
		passport:'',
		address:'',
		city:'',
		cardName:'',
		cardNr:'',
		cardExpDate:''
	}

	return (
    <React.Fragment> 
		<Navbar/>
	
        <div className={'formContainer'}> 
    	    <Formik initialValues={form} onSubmit={(v)=>console.log(v)}
					validationSchema={payValidSchema}
         			enableReinitialize>
						 
				{(props) => (
					<Form className={'formPayment'}>
						<h2>Datos de pago</h2>
						<p>Completa con tus datos personales</p>
						<Field className={'searchInputPayment'} name={'firstName'} placeholder={'Nombre:'} />
						<ErrorMessage name='firstName'/>
						<Field className={'searchInputPayment'} name={'lastName'} placeholder={'Apellido:'} />
						<ErrorMessage name='lastName'/>
						<span>Fecha de nacimiento</span>
						<Field className={'searchInputPayment'} name={'birthDay'} type={'date'} placeholder={'DD/MM/YY'} />
						<ErrorMessage name='birthDay'/>
						<Field className={'searchInputPayment'} name={'passport'} placeholder={'Número de pasaporte:'} />
						<ErrorMessage name='passport'/>
						<Field className={'searchInputPayment'} name={'address'} placeholder={'Dirección:'} />
						<ErrorMessage name='address'/>
                        <Field className={'searchInputPayment'} name={'city'} placeholder={'Ciudad:'} />
						<ErrorMessage name='city'/>
						<p>Completa con tus datos de tarjeta de credito</p>
                        <Field className={'searchInputPayment'} name={'cardName'} placeholder={'Nombre y apellido tal como en la tarjeta:'} />
						<ErrorMessage name='cardName'/>
						<Field className={'searchInputPayment'} name={'cardNr'} placeholder={'Número de tarjeta'} />
						<ErrorMessage name='cardNr'/>
						<span>Fecha de vencimiento de la tarjeta</span>
						<Field className={'searchInputPayment'} name={'cardExpDate'} type={'date'} placeholder={'DD/MM/YY'} />
						<ErrorMessage name='cardExpDate'/>
						<button className={'searchButtonPayment'} type={'button'} onClick={() => props.handleSubmit()}>
							Pagar
						</button>
					</Form>
				)}
			</Formik>
		</div>
    
    </React.Fragment>
)}

export default Success