import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import './styles.css'

import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './pages/MainPage'
import ItemsPage from './pages/ItemsPage'
import PartPage from './pages/PartPage'
import RidingStylesPage from './pages/RidingStylesPage'

function App() {
	return (
		<div className="App px-4">
			<Header/>
			<Switch>
				<Route path="/" component={MainPage} exact/>
				<Route path="/items" component={ItemsPage} exact/>
				<Route path="/part" component={PartPage} exact/>
				<Route path="/riding-styles" component={RidingStylesPage} exact/>
			</Switch>
			<Footer/>
		</div>
	)
}

export default App
