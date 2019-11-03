import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {goToTop} from 'react-scrollable-anchor';
import './Conclusion.css';

class Conclusion extends Component {
	componentWillMount() {
        goToTop();
    }
    render() {
        return (
			<div className="background">
				<Helmet>
					<title>Conclusion - CPS530 Final Project</title>
				</Helmet>
				<Container>
					<Row className="conclusion">
						<h1><br /><u>Conclusion</u></h1>
						<Col md={11}>
							<p className="conclusion-text">
								<h2 className="Laravel">Our Laravel Experience</h2>
								<ol>
									<li>Our experience of Laravel was mostly positive. We initially ran into problems in the setup and configuring phase, but we solved the issues that we encountered. </li>
									<li>We removed the Contact page since we could use Laravel instead to communicate.</li>
									<li>We also found many tutorials and useful documentation that guided our way, but we did experience somewhat of a learning curve, one that is a bit higher than that of the languages we have learned in class in the past. </li>
									<li>Unfortunately, we were unable to get this framework to communicate to the ReactJS framework correctly. </li>
									<li>In retrospect, we would still stay with the choice to use Laravel because the issues that we encountered were not of Laravel itself but of the technical server issues.</li>
									<li>Therefore, we do not regret using this framework for the project. </li>
								</ol>
								<br /><br /><br />
								<h2 className="React">Our ReactJS Experience</h2>
								<ol>
									<li>Our overall experience with ReactJS was positive. The online documentation and tutorials were very resourceful and helpful. </li>
									<li>The framework accomodated our needs for this project, and performed upto our expectations. </li>
									<li>It was not difficult to install and configure since there is a lot of tutorials on how to do so, and we did not encounter any unforseen complications. The documentation on the official reactJS website was especially useful when trying figure output small nuances of the framework. </li>
									<li>As such, the pages were no difficult to produce than the lab assignment pages, and the learning curve was not very high compared to the other frameworks we had learned in class. </li>
									<li>After having used ReactJS for the project, we are happy with our choice of framework and do not regret it at all. </li>
								</ol>
							</p>
						</Col>
					</Row>
				</Container>
			</div>
        );
   }
}

export default Conclusion;
