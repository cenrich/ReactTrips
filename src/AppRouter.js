import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.scss'
import Home from './pages/Home'
import Results from './pages/Results'
import Success from './pages/Success'

const AppRouter = () => {
	return (
		<Router>
			<Route exact path={'/'} component={Home} />
			<Route path={'/results'} component={Results} />
			<Route path={'/success'} component={Success} />
		</Router>
	)
}

export default AppRouter
