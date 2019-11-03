import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'; 
import {NavLink} from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
	render() {
		return (
			<Grid>
                <Row className="show-grid text-center ">
                    <Col md={12} className="Menu-items">
                        <nav class="navbar fixed-top navbar-dark bg-dark">
							<NavLink to="/" class="navbar-brand">CPS530 Project</NavLink>
							<NavLink to="/About" class="menuItem">Summary</NavLink>
							<NavLink to="/Installation" class="menuItem">Installation Instructions</NavLink>
							<NavLink to="/Tutorial" class="menuItem">Tutorial</NavLink>
							<NavLink to="/Conclusion" class="menuItem">Conclusion</NavLink>
							<NavLink to="/Credits" class="menuItem">Credits</NavLink>
						</nav>
                    </Col>
                </Row>
                <hr/>
            </Grid>
		);
	}
}