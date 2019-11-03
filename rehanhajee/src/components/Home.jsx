import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {goToTop} from 'react-scrollable-anchor';
import './Home.css';

class Home extends Component {
	componentWillMount() {
        goToTop();
    }
    render() {
        return (
			<div className="background">
				<Helmet>
					<title>Home - Rehan Hajee</title>
				</Helmet>
				<Container className="home">
					<br /><br />
					<figure className="centre"><Image className="profilePic" src={require('../images/profilePicture.JPG')}  /></figure>
					<h1><br /><u>Hi, I'm Rehan Hajee!</u></h1>
					<br />
					<div className="centre">Here are a couple of lines about what you are currently doing and <br />where you are located. You should also include something important <br />that will make you stand out to future employers.</div>
					<Row >
						<Col md={10}>
							<div className="home-text">
								<div>
									<h2 className="left"><u>Skills</u></h2>
									<ul>
										<li>• Highly proficent in Java Programming</li>
										<br />
										<li>• Proficent in C, HTML, and Python Programming</li>
										<br />
										<li>• Proficient in Microsoft Office Suite (Word, Excel, PowerPoint, Publisher, OneNote)</li>
										<br />
										<li>• Proficent in Adobe Photoshop, Adobe Premiere, Adobe Illustrator, Adobe Flash</li>
										<br />
										<li>• Proficient in Windows, Mac and Linux operating systems</li>
										
									</ul>
								</div>
								<hr />
								<div>
									<h2 className="left"><u>Education</u></h2>
									<ul>
										<li><b>Ryerson University</b>
											<br /><i>Bachelor of Science</i>
											<br /><i>Major in Computer Science • September 2016 - April 2020 (Expected)</i>
											<div>
												<ul>
													<li><i>Academics:</i> Computer science courses include Introduction to C and UNIX, Data Structures, Social Issues, Ethics and Professionalism, Computer Security, Web Systems Development, Database Systems</li>
													<br /><br />
													<li><i>Projects:</i> Created a website with Laravel and React showing installation steps for these frameworks, created a Java program which displayed data from a personally created SQL database, created a daily appointment calendar in Java, which includes a partial contact management system </li>
													<br /><br />
													<li><i>Awards:</i> Entrance Scholarship</li>
												</ul>
											</div>
											<br /><br />
											Put your second most recent school here.
											<br /><i>Your program name • start Month, Year - end Month, Year</i>
											<div>
												<ul>
												<li><i>Honors:</i> Ontario Scholar</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
								<hr />
								<div>
									<h2 className="left"><u>Work Experience</u></h2>
									<ul>
										<li>Put your most recent job company here.
											<br /><i>Your position • start Month, Year - end Month, Year</i>
											<br /><br />
											Put your second most recent job company here.
											<br /><i>Your position • start Month, Year - end Month, Year</i>
										</li>
									</ul>
								</div>
								<hr />
								<div>
									<h2 className="left"><u>Volunteer Experience</u></h2>
									<ul>
										<li>Put your most volunteer position here.
											<br /><i>Your position • start Month, Year - end Month, Year</i>
											<br /><br />
											Put your second most recent volunteer position here.
											<br /><i>Your position • start Month, Year - end Month, Year</i>
										</li>
									</ul>
								</div>
								<hr />
								<div>
									<h2 className="left"><u>Skills</u></h2>
									<ul>
										<li>
										Most important skill here
										<br />
										Second most important skill here
										<br />
										Third most important skill here
										<br />
										Any other important skills here as well
										</li>
									</ul>
								</div>
								<hr />
								<div>
									<h2 className="left"><u>Awards</u></h2>
									<ul>
										<li>
											Put your most recent award here.
											<br /><i>Month recieved, Year recieved</i>
											<br /><br />
											Put your second most recent award here.
											<br /><i> Month recieved, Year recieved</i>
											<br /><br />
											Put all other awards here.
											<br /><i> Month recieved, Year recieved</i>
										</li>
									</ul>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
        );
   }
}

export default Home;
