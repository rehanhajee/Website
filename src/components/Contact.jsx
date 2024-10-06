import React from 'react';
import {Container, Image, Button} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';

import './Contact.css';

function Contact() {
	return (
		<div className="background">
			<Helmet>
				<title>Contact Me - Rehan Hajee</title>
			</Helmet>
			<Container className="contact">
				<main>
					<section>
						<div className="contact-text">
							<article>
								<header><h1 className="heading"><b>Contact Me</b></h1></header>
								<br />
								
								You can contact me at any of the following:
								
								<br />
								<section>
									<br />
									<Image className="socialMedia" src={require('../images/facebook-brands.svg').default} alt="Facebook logo" />
									<Button variant="link" href="https://www.facebook.com/rehan.hajee"><h4><b>rehan.hajee</b></h4></Button>
									<br />
								</section>
								<section>
									<br />
									<Image className="socialMedia" src={require('../images/linkedin-brands.svg').default} alt="LinkedIn logo" />
									<Button variant="link" href="https://www.linkedin.com/in/rehan-hajee/"><h4><b>rehan-hajee</b></h4></Button>
									<br />
								</section>
								<section>
									<br />
									<Image className="socialMedia" src={require('../images/email.svg').default} alt="Email" />
									<Button variant="link" href="mailto:info@rehanhajee.com"><h4><b>Email</b></h4></Button>
									<br />
								</section>
								<section>
									<br />
									<Image className="socialMedia github" src={require('../images/github-brands.svg').default} alt="Github logo" />
									<Button variant="link" href="https://github.com/rehanhajee/"><h4><b>rehanhajee</b></h4></Button>
									<br />
								</section>
							</article>
						</div>
					</section>
				</main>
			</Container>
		</div>
	);
}

export default Contact;
