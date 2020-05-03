import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"; 
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
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
							<Route path="/Projects" component={Projects}/>
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
