import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {NavLink} from 'react-router-dom';
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
					<title>CPS530 Final Project</title>
				</Helmet>
				<Container className="home">
					<br /><br />
					<figure className="centre"><Image className="profilePic" src={require('../img/profilePicture.JPG')}  /></figure>
					<h1><br /><u>Hi, I'm Rehan Hajee!</u></h1>
					<br />
					<div className="centre">Here are a couple of lines about what you are currently doing and <br />where you are located. You should also include something important <br />that will make you stand out to future employers.</div>
					<Row >
						<Col md={11}>
							<div className="home-text">
								<div>
								<h2 className="left"><u>Education</u></h2>
								<ul>
									<li>Put your most recent school here.
										<i><br />Your program name • start Month, Year - end Month, Year</i>
										<br /><br />
										Put your second most recent school here.
										<i><br />Your program name • start Month, Year - end Month, Year</i>
									</li>
								</ul>
								</div>
								<hr />
								<div>
								<h2 className="left"><u>Work Experience</u></h2>
								<ul>
									<li>Put your most recent job company here.
										<i><br />Your position • start Month, Year - end Month, Year</i>
										<br /><br />
										Put your second most recent job company here.
										<i><br />Your position • start Month, Year - end Month, Year</i>
									</li>
								</ul>
								</div>
								<hr />
								<div>
								<h2 className="left"><u>Volunteer Experience</u></h2>
								<ul>
									<li>Put your most volunteer position here.
										<i><br />Your position • start Month, Year - end Month, Year</i>
										<br /><br />
										Put your second most recent volunteer position here.
										<i><br />Your position • start Month, Year - end Month, Year</i>
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
								<div>
								This page has a lot of great page features which you can use for your own site. To learn how to make a great looking site, check out our <NavLink to="/Tutorial">Tutorial</NavLink>.
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
