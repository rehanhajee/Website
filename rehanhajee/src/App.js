import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"; 
/*package used to route to terms page and define the sub link of each component: https://www.npmjs.com/package/react-router-dom */

import Navbar from './components/Navbar';
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
			<div>
				<BrowserRouter>
					<div>
						<Navbar />
						<Switch className="App">
							<Route exact path="/" component={Home}/>
							<Route path="/About" component={About}/>
							<Route path="/Installation" component={Installation}/>
							<Route path="/Tutorial" component={Tutorial}/>
							<Route path="/Conclusion" component={Conclusion}/>
							<Route path="/Credits" component={Credits}/>
							<Route path="" component={Error}/>
						</Switch>
						<Footer />
					</div>
				</BrowserRouter>
				
			</div>
		);
	}
}

export default App;
