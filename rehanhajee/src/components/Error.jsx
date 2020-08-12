import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

class Error extends Component {
    render() {
        return (
			<div>
				<Helmet>
					<title>Error 404 - Rehan Hajee</title>
				</Helmet>
				<Container className="error">
					<main>
						<section>
							<article className="error-text">
								<br /><br />
								<h1>404 - Not Found</h1>
								<br /><br />
								Ensure you have entered the correct link and try again later.
								<br /><br /><br /><br />
							</article>
							
						</section>
					</main>
				</Container>
			</div>
        );
    }
}

export default Error;
