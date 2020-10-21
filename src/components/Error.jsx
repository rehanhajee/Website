import React, {Component} from 'react';
import {Container, Button} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

import './Error.css';

class Error extends Component {
    render() {
        return (
			<div className="background">
				<Helmet>
					<title>Error — Rehan Hajee</title>
				</Helmet>
				<Container className="error">
					<main>
						<section className="error-text">
							<header><h1 className="heading"><b>Error</b></h1></header>
							<article >	
								<br />
								The page you are looking for does not exist. 
								<br /><br />
								Ensure you have entered the correct link and try again later.
								<br /><br /><br /><br />
								<article className="centre">
									<Button variant="outline-info" size="lg" href="/"> Home </Button>
								</article>
								<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
							</article>
							
						</section>
					</main>
				</Container>
			</div>
        );
    }
}

export default Error;
