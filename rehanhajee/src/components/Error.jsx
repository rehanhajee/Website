import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
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
						<article>
							<section>
								<br /><br />
								<h1>404 - PAGE NOT FOUND</h1>
							</section>
						</article>
					</main>
				</Container>
			</div>
        );
    }
}

export default Error;
