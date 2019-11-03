import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'; 
import {NavLink} from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
	render() {
		return (
			<Row className="show-Container header ">
				<Col md={12} className="Menu-items">
					<header>
						<NavLink to="/" className="navbar-brand">Rehan Hajee</NavLink>
						<nav className="navbar fixed-top navbar-dark bg-dark centre">
							<NavLink to="/" className="menuItem">About Me</NavLink>
							{/*
							|
							<NavLink to="/Installation" className="menuItem">Installation Instructions</NavLink>
							|
							<NavLink to="/Tutorial" className="menuItem">Tutorial</NavLink>
							|
							<NavLink to="/Conclusion" className="menuItem">Conclusion</NavLink>
							*/}
						</nav>
					</header>
				</Col>
			</Row>
		);
	}
}