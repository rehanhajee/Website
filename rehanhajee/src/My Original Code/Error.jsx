import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import {Helmet} from 'react-helmet';

class Home extends Component {
    render() {
        return (
			<div>
				<Helmet>
					<title>Error 404 - CPS530 Final Project</title>
				</Helmet>
				<Grid>
					<Row>
						<Col md={2} />
						<Col md={10}>
							<p><Image src={'http://www.magnt.com/wp-content/uploads/2016/01/404image.png'} responsive className="error"/></p>
						</Col>
					</Row>
				</Grid>
			</div>
        );
    }
}

export default Home;
