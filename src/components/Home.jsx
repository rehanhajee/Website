import React, {Component} from 'react';
import {Container, Image, Button} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {goToTop} from 'react-scrollable-anchor';

import './Home.css';

class Home extends Component {
	componentDidMount() {
        goToTop();
    }
	
    render() {
        return (
			<div className="background">
				<Helmet>
					<title>Rehan Hajee</title>
				</Helmet>
				<Container className="home">
					<main>
						<section>
							<article>
								<br /><br />
								<figure className="centre"><Image className="profilePic" src={require('../images/profilePicture.JPG')}  /></figure>
								<br />
								<h1><b>Hi, I'm Rehan Hajee!</b></h1>
								<br />
								<div className="centre">I am a Cadet Instructor Cadre (CIC) Officer with a demonstrated history of working with the Canadian Cadet Organization (CCO). Skilled in Java, Adobe Photoshop, Adobe Premiere Pro, Unix, HTML, and Cascading Style Sheets (CSS). Strong professional with a Bachelor of Science - Honours (BSc - Hons) focused in Computer Science from Ryerson University.</div>
							</article>
						</section>
						<section>
							<div className="home-text">
								<hr />
								{/*<article>
									<header><h2 className="heading"><u>Heading</u></h2></header>
									<ul>
										<li>• List Item</li>
										<br />
									</ul>
								</article>*/}
								<article className="centre">
								<Button variant="outline-info" size="lg" href="/About"> About Me </Button>
								{/*<br /><br />*/}
								<Button variant="outline-info" size="lg" href="/Projects"> My Projects </Button>
								{/*<br /><br />*/}
								<Button variant="outline-info" size="lg" href="/Contact"> Contact Me </Button>
								<br /><br />
								</article>
							</div>
								
						</section>
					</main>
				</Container>
			</div>
        );
	}
}

export default Home;
