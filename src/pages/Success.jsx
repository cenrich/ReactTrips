import React from 'react'
import { Formik, Form, Field } from 'formik'
import '../pages/Success.scss'
import Navbar from "../pages/Navbar"


const Success = () =>{
    return (

     <React.Fragment> 
		<Navbar></Navbar>
	
        <div className={'formContainer'}> 
        <Formik>
					{(props) => (
						<Form className={'formPayment'}>
							<h2>Datos de pago</h2>
							<p>Completa con tus datos personales</p>
							<Field className={'searchInputPayment'} name={'name'} placeholder={'Nombre:'} />
							<Field className={'searchInputPayment'} name={'lastname'} placeholder={'Apellido:'} />
							<Field className={'searchInputPayment'} name={'birthdate'} type={'date'} placeholder={'DD/MM/YY'} />
							<Field className={'searchInputPayment'} name={'passport'} placeholder={'Pasaporte:'} />
							<p>Completa con tus datos de tarjeta de credito</p>
							<Field className={'searchInputPayment'} name={'bill'} placeholder={'Dirección:'} />
                            <Field className={'searchInputPayment'} name={'city'} placeholder={'Ciudad:'} />
                            <Field className={'searchInputPayment'} name={'nameoncard'} placeholder={'Nombre en la tarjeta:'} />
							<Field className={'searchInputPayment'} name={'cardnum'} placeholder={'Número de tarjeta'} />
							<Field className={'searchInputPayment'} name={'expiredate'} type={'date'} placeholder={'DD/MM/YY'} />
							<button className={'searchButtonPayment'}type={'button'} onClick={() => props.handleSubmit()}>
								Pagar
							</button>
						</Form>
					)}
				</Formik>
				</div>
    
                </React.Fragment>
    )

}


export default Success