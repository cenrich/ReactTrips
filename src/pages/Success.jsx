import React from 'react'
import { Formik, Form, Field } from 'formik'
import '../pages/Success.scss'

const Success = () =>{
    return (

        <React.Fragment> 
        <h1>Sensacional éxito</h1>

        <Formik>
					{(props) => (
						<Form className={'form'}>
							<Field className={'searchInput'} name={'name'} placeholder={'Nombre:'} />
							<Field className={'searchInput'} name={'lastname'} placeholder={'Apellido:'} />
							<Field className={'searchInput'} name={'birthdate'} type={'date'} placeholder={'DD/MM/YY'} />
							<Field className={'searchInput'} name={'passport'} placeholder={'Pasaporte:'} />
							<Field className={'searchInput'} name={'bill'} placeholder={'Dirección:'} />
                            <Field className={'searchInput'} name={'city'} placeholder={'Ciudad:'} />
                            <Field className={'searchInput'} name={'nameoncard'} placeholder={'Nombre en la tarjeta:'} />
							<Field className={'searchInput'} name={'cardnum'} placeholder={'Número de tarjeta'} />
							<Field className={'searchInput'} name={'expiredate'} type={'date'} placeholder={'DD/MM/YY'} />
							<button className={'searchButton'}type={'button'} onClick={() => props.handleSubmit()}>
								>
							</button>
						</Form>
					)}
				</Formik>
    
                </React.Fragment>
    )

}


export default Success