import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"; 

import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Installation from './components/Installation';
import Tutorial from './components/Tutorial';
import Conclusion from './components/Conclusion';
import Credits from './components/Credits';
import Error from './components/Error';

import './App.css';

class App extends Component {
	render() {
		return (
			<main>
				<BrowserRouter>
					<article>
						<CustomNavbar />
						<Switch className="App">
							<Route exact path="/" component={Home}/>
							<Route exact path="/Home" component={Home}/>
							<Route path="/About" component={About}/>
							<Route path="/Installation" component={Installation}/>
							<Route path="/Tutorial" component={Tutorial}/>
							<Route path="/Conclusion" component={Conclusion}/>
							<Route path="/Credits" component={Credits}/>
							<Route path="" component={Error}/>
						</Switch>
						<Footer />
					</article>
				</BrowserRouter>
			</main>
		);
	}
}

export default App;
