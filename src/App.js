import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"; 
import Particles from 'react-particles-js';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Programming from './components/Programming';
import Media from './components/Media';
import Contact from './components/Contact';
import Error from './components/Error';
import Test from './components/Test';


import './App.css';

class App extends Component {
	render() {
		return (
			<main>
				<BrowserRouter>
					<article>
					<CustomNavbar />
					<Particles
						params={{ 
							"particles": {
								"line_linked": {
									"color":"#FFFFFF"
								},
								"number": {
									"value": 100
								},
								"size": {
									"value": 5
								}
							},
							"interactivity": {
								"detect_on": "window",
								"events": {
									"onhover": {
										"enable": true, 
										"mode": "repulse"
									}
								}
							}
						}}
						style={{
							width: '100%',
							zIndex: '-999', 
							position: 'fixed',
							background: '#7a7a7a'
						}} 
						/>
						<Switch className="App">
							<Route exact path="/" component={Home}/>
							<Route exact path="/About" component={About}/>
							<Route path="/Programming" component={Programming}/>
							<Route path="/Contact" component={Contact}/>
							<Route path="/Media" component={Media}/>
							<Route path="/Test" component={Test}/>
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
