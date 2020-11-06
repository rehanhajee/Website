import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"; 
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Programming from './components/Programming';
import Media from './components/Media';
import Contact from './components/Contact';
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
							<Route exact path="/About" component={About}/>
							<Route path="/Programming" component={Programming}/>
							<Route path="/Contact" component={Contact}/>
							<Route path="/Media" component={Media}/>
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
