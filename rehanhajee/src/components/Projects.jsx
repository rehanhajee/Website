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
		function iframe(link, title) {
			return <article><iframe src={link} title={title} width="100%" height="400"></iframe></article>;
		}

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
							
							</article>
							<article>
								
							</article>

							{iframe("https://www.cs.ryerson.ca/~r2hajee/Lab2/index.html", "Lab 2")}

							<article>
							Created a website with Laravel and React showing installation steps for these frameworks, created a Java program which displayed data from a personally created SQL database, created a daily appointment calendar in Java, which includes a partial contact management system
							</article>
						</section>
					</main>
				</Container>
			</div>
        );
	}
}

export default Projects;