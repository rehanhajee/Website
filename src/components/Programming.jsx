import React, {Component} from 'react';
import {Container} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {goToTop} from 'react-scrollable-anchor';

import './Programming.css';

class Programming extends Component {
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
					<title>Programming - Rehan Hajee</title>
				</Helmet>
				<Container className="programming">
					<main>
						<section className="programming-text">
							<header><h1 className="heading"><b>Programming</b></h1></header>
							<br />
							
							{/*{iframe("https://www.cs.ryerson.ca/~r2hajee/personalWebsite/weatherApp/index.html", "Weather App")}*/}
							
							<article>
								<h2 className="programming-heading">Personal Website</h2>
								<h4><i>(HTML/CSS, React.js, Firebase Hosting)</i></h4>
								This is my personal website to showcase the projects and previous work and volunteer experience. The purpose of this website to show my technical knowledge and design theory. The Github link and Website link can be found below.
								<br />
								<b>Github Link: <a href="https://github.com/rehanhajee/Website">Here</a></b>
								<br />
								<b>Live Demo: <a href="https://rehanhajee.me">Here</a></b>
							</article>

							<br />
							
							<article>
								<h2 className="programming-heading">Great Circle Distance Calculator</h2>
								<h4><i>(HTML/CSS, JS)</i></h4>
								This was an application that calculated the distance between two points. One of the points could either be your current location or a custom location. The starting location would be shown on a map. The program would use a web worker to calculate the distance, in kilometres, between the current location and a set of coordinates uploaded via a text file using the haversine formula. For each set of coordinates, the name of the stret, city, and country would be displayed.
								{/*
								<br />
								<b>Github Link: <a href="#">Here</a></b>
								<br />
								<b>Live Demo: <a href="#">Here</a></b>*/}
							</article>

							<br />
							
							<article>
								<h2 className="programming-heading">Weather App</h2>
								<h4><i>(HTML/CSS, JS)</i></h4>
								This was a fully functional responsive Weather App that used AJAX with JSON and current weather data to display the weather for a city. The user can toggle between the metric and imperial system to get temperature and wind speed. Small graphics were also included, depending on the type of weather. The app displayed the current tremperature and weather conditions and a 5-day forecast displayed in 3-hour intervals.
								{/*
								<br />
								<b>Github Link: <a href="#">Here</a></b>
								<br />
								<b>Live Demo: <a href="#">Here</a></b>*/}
							</article>
							
							<br />

							<article>
								<h2 className="programming-heading">Recreational Membership Management System</h2>
								<h4><i>(Java)</i></h4>
								This was a program that allowed users of a community centre to sign-up and pay for classes that were being held. The program allowed management of the community centre to manage the members of each class, as well as to add/remove classes. We delegated tasks to team to ensure each member was working to their strengths. The program featured two different views: one for the members, another for the staff. The UI was designed using Java’s Swing Library, and the application was built using object-oriented programming.
								{/*
								<br />
								<b>Github Link: <a href="#">Here</a></b>
								<br />
								<b>Live Demo: <a href="#">Here</a></b>*/}
							</article>

							<br />

							<article>
								<h2 className="programming-heading">Library Database Management System</h2>
								<h4><i>(Java, SQL)</i></h4>
								This was an application that allowed <i>members</i> to <i>borrow</i> and return various types of <i>books</i> from the library with a maximum of two <i>renewals</i> per item, and allowed <i>employees</i> to access the inventory of the <i>books</i>, <i>request</i> new <i>items</i> from <i>publishers</i>, and <i>manage</i> fines for <i>members</i>. We planned weekly meetings to receive and process feedback from the team to ensure the final product was satisfactory. The database was designed using SQL, with all tables normalized to BCNF. The UI was built using Java’s Swing Library.
								{/*
								<br />
								<b>Github Link: <a href="#">Here</a></b>
								<br />
								<b>Live Demo: <a href="#">Here</a></b>*/}
							</article>

							<br />

							<article>
								<h2 className="programming-heading">Resume Builder</h2>
								<h4><i>(HTML/CSS, PHP)</i></h4>
								This was a web application that assisted users to create their own resume using the given template. The site allowed users to send an email from the webiste to request more information. The fron-end was designed using HTML/CSS with React framework; back-end was designed using PHP with Laravel.
								{/*
								<br />
								<b>Github Link: <a href="#">Here</a></b>
								<br />
								<b>Live Demo: <a href="#">Here</a></b>*/}
							</article>

							<br />
							
							<article>
								<h2 className="programming-heading">WoofsUp</h2>
								<h4><i>(Ruby, Python)</i></h4>
								This was a social web application tailored to dog owners who wish to share photos of their canine companions with others. It included a park finder to find dog parks based on geolocation. Uploaded photos by the users were analyzed using computer vision to identify the species of the dog. The front-end was designed using Ruby with Ruby on Rails; back-end was designed using Python, Flask, and TensorFlow.
							</article>

							<br />

							<article>
								<h2 className="programming-heading">Information Retrieval System</h2>
								<h4><i>(Java)</i></h4>
								This was an application that featured Stop Word Removal and the Porter Stemming Algorithm to mimic an information retrieval system. The program was tested using the CACM Collection. The accuracy of the system was measured using R-Precision and PageRank. The primary data structure used were Maps.
							</article>

						</section>
					</main>
				</Container>
			</div>
        );
	}
}

export default Programming;