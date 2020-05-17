import React, {Component} from 'react';
import {Container} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {goToTop} from 'react-scrollable-anchor';

import './Projects.css';

class Projects extends Component {
	componentDidMount() {
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
						<section className="projects-text">
							<br />
							<header><h1><u>Projects</u></h1></header>
							
							<article>
							Created a website with Laravel and React showing installation steps for these frameworks, created a Java program which displayed data from a personally created SQL database, created a daily appointment calendar in Java, which includes a partial contact management system
							</article>
							<article>
								
							</article>
						</section>
					</main>
				</Container>
			</div>
        );
	}
}

export default Projects;