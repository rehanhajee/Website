import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {NavLink} from 'react-router-dom';
import {goToTop} from 'react-scrollable-anchor';

import './Tutorial.css';

class Tutorial extends Component {
	componentWillMount() {
        goToTop();
    }
    render() {
        return (
			<div className="background">
				<Helmet>
					<title>Tutorial - CPS530 Final Project</title>
				</Helmet>
				<Grid>
					<Row className="tutorial">
						<h1><br /><u>Tutorial</u></h1>
						<Col md={11}>
							<p className="tutorial-text">
								<p>
									You can see the result of this tutorial on the <NavLink to="/">home page</NavLink>.
									<h2><br />Overall Tips</h2>
									<ol>
										<li><b>1.</b> First, the layout of the website needs to be intuitive for the users. They must be able to locate what they are interested in and navigate to the pages they want. For this, hyperlinks must be placed where any given page is described. Also, a sidebar or a drop-down menu would be appropriate.</li>
										<li><b>2.</b> The information in a page must not be cluttered. So they must be arranged in a clear and spacious way with appropriate amount of white space to create the feeling of spaciousness.</li>
										<li><b>3.</b> A colour scheme that's eye-catching but also comfortable to look at should be. The colour scheme should complement the layout of the information of the page. Ideally, the colour scheme should act as natural divisions in the page that separates different parts of the page. </li>
										<li><b>4.</b> If icons can be used to replace text in navigation links and other key links, they should be used in a stylistic and helpful fashion. </li>
									</ol>
									<h2><br />React JS Specifically </h2>
									<ol>
									  <li><b>1.</b> Since React is for frontend, we used it to display all of our information.</li>
									  <li><b>2.</b> To start off, find a good picture to use that's high quality, and not too large.</li>
									  <li><b>3.</b> Right under the picture, using the header 1 tag, <bdi className="code">h1</bdi>, put in your name. Directly under it, you can use the paragraph tag, <bdi className="code">p</bdi>, to include a short summary about yourself. Include what you currently do, where you do it, and anything that will make you stand out from anyone else.</li>
									  <li><b>4.</b> This is where you can include information about your education, any previous work experience, and some of your skills. You can also include any prestigous awards here as well.</li>
									  <li><b>5. </b> To make your page look less boring, add CSS to change the background, text alignment, or to change many other attributes.</li>
									</ol>
									<h2><br />Laravel Specifically </h2>
									<ol>
										<li><b>1.</b> Since Laravel is for backend, we used it for our contact form. </li>
										<li><b>2.</b> To do so, we used a Laravel package called Laravel Collective. We followed the instructions in the official Laravel website to install the package. </li>
										<li><b>3.</b> The forms we created were the ones for a Contact page, where a user can send an email to the owner of the page. A form used for their name, email, and a short message each. Each of these forms were the ones defined in bootstrap in the form-control class. We found this class to give a very clear and smooth look. </li>
										<li><b>4.</b> For the submit button, we used the class btn-primary of bootstrap.</li>
										<li><b>5.</b> Now that the button and the forms created, created a route and a controller in the corresponding router and controller directories/files. We created the controller using the <bdi className="code"> php artisan make:controller</bdi> command. </li>
										<li><b>6.</b> In the controller, we defined the validation we wanted to put on the forms. For the name and the message, we set it to required. For email, we used the regex we learned in class.</li>
										<li><b>7.</b> When the user submits with errors, the errors will be shown underneath the submit button to show what the error was.</li>
										<li><b>8.</b> If the submission was a success, a confirmation is shown. </li>
									</ol>
								</p>
							</p>
						</Col>
					</Row>
				</Grid>
			</div>
        );
   }
}

export default Tutorial;
