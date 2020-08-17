import React, {Component} from 'react';
import {Container, Image, Button} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {goToTop} from 'react-scrollable-anchor';

import './Contact.css';

class Contact extends Component {
	componentDidMount() {
        goToTop();
    }
	
    render() {
        return (
			<div className="background">
				<Helmet>
					<title>Contact Me — Rehan Hajee</title>
				</Helmet>
				<Container className="contact">
					<main>
						<section>
							<div className="contact-text">
								<br />
								<article>
									<header><h2 className="heading"><u>Contact Me</u></h2></header>
									<br />
									
									You can contact me at any of the following:
									
									<br />
									<section>
										<br />
										<Image className="socialMedia" src={require('../images/facebook.svg')} />
										<Button variant="link" href="https://www.facebook.com/rehan.hajee"><h4><b>FB/rehan.hajee</b></h4></Button>
										<br />
									</section>
									<section>
										<br />
										<Image className="socialMedia" src={require('../images/linkedIn.svg')}  />
										<Button variant="link" href="https://www.linkedin.com/in/rehan-hajee/"><h4><b>LI/rehan-hajee</b></h4></Button>
										<br />
									</section>
									<section>
										<br />
										<Image className="socialMedia" src={require('../images/email.svg')}  />
										<Button variant="link" href="mailto:rehanhajee@com"><h4><b>Email me</b></h4></Button>
										<br />
									</section>
									<section>
										<br />
										<Image className="socialMedia" src={require('../images/github.svg')}  />
										<Button variant="link" href="https://github.com/rehanhajee/"><h4><b>Github/rehanhajee</b></h4></Button>
									</section>
								</article>
							</div>
						</section>
					</main>
				</Container>
			</div>
        );
	}
}

export default Contact;
