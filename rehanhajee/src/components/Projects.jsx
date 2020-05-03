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
							<div className="projects-text">
								<header><h1 className="left"><u>Projects</u></h1></header>
								
							</div>
						</article>
					</main>
				</Container>
			</div>
        );
	}
}

export default Projects;