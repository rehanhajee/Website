import React, {Component} from 'react';
import {Navbar, Row, Col} from 'react-bootstrap'; 
import {NavLink} from 'react-router-dom';

import './CustomNavbar.css';

class CustomNavbar extends Component {
	render() {
		return (
			<Row className="show-Container header">
				<Col md={12} className="Menu-items">
					<Navbar>
						<nav className="navbar fixed-top bg-dark navbar-dark">
							<NavLink to="/" className="navbar-brand">Rehan Hajee</NavLink>
							<NavLink to="/Projects" className="menuItem">Projects</NavLink>
							<NavLink to="/Tutorial" className="menuItem">Tutorial</NavLink>
							<NavLink to="/Conclusion" className="menuItem">Conclusion</NavLink>
						</nav>
					</Navbar>
				</Col>
			</Row>
		);
	}
}

export default CustomNavbar;