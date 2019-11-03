import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap'; 
import {NavLink} from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
	render() {
		return (
			<header>
                <Row className="show-Container header ">
                    <Col md={12} className="Menu-items">
						<NavLink to="/" className="navbar-brand">Rehan Hajee</NavLink>
                        <nav className="navbar fixed-top navbar-dark bg-dark centre">
							<NavLink to="/About" className="menuItem">Summary</NavLink>
							|
							<NavLink to="/Installation" className="menuItem">Installation Instructions</NavLink>
							|
							<NavLink to="/Tutorial" className="menuItem">Tutorial</NavLink>
							|
							<NavLink to="/Conclusion" className="menuItem">Conclusion</NavLink>
						</nav>
                    </Col>
                </Row>
            </header>
		);
	}
}