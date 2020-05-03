import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {goToTop} from 'react-scrollable-anchor';

import './Projects.css';

class Projects extends Component {
	componentWillMount() {
        goToTop();
	}
	
    render() {
        return (
			<div className="background">
				<Helmet>
					<title>Projects - Rehan Hajee</title>
				</Helmet>
				<Container className="projects">
					<main>
						<article>
							<Row>
								<Col md={12}>
									<div className="projects-text">
										<br /><br />
										<header><h1 className="left"><u>Projects</u></h1></header>
										
									</div>
								</Col>
							</Row>
						</article>
					</main>
				</Container>
			</div>
        );
	}
}

export default Projects;