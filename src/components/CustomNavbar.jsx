import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap'; 

import './CustomNavbar.css';

class CustomNavbar extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark" expand="lg" className="navbar fixed-top navbar-dark">
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Brand href="/"><b>Rehan Hajee</b></Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/" className="menuItem">Home</Nav.Link>
						<Nav.Link href="/About" className="menuItem">About Me</Nav.Link>
						<Nav.Link href="/Programming" className="menuItem">Programming</Nav.Link>
						<Nav.Link href="/Media" className="menuItem">Media Production</Nav.Link>
						<Nav.Link href="/Contact" className="menuItem">Contact Me</Nav.Link>
						{/*<Nav.Link href="#" className="menuItem"></Nav.Link>*/}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default CustomNavbar;