import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {goToTop} from 'react-scrollable-anchor';
import './Credits.css';

class Credits extends Component {
	componentWillMount() {
        goToTop();
    }
    render() {
        return (
			<div className="background">
				<Helmet>
					<title>Credits - CPS530 Final Project</title>
				</Helmet>
				<Container>
					<Row className="credits">
						<h1><br /><u>Credits</u></h1>
						<Col md={11}>
							<p className="credits-text">
							<h3>Rehan Hajee</h3>
							Rehan set up both of the frameworks and created the project. He worked with Dulitha for the Tutorial. He also worked with Dulitha and Mustafa to make the home page
							
							<h3><br />Dulitha Amarasingha</h3>
							Dulitha did the Conclusion and Installation Instructions pages. He also got a Error 404 page created, which shows up when a user tries to manually enter an illegal link. He also worked with Rehan to do the tutorial page, as well as Mustafa for the home page.
							
							<h3><br />Mustafa Salem</h3>
							Mustafa created the About page. He worked with Rehan and Dulitha to make the home page. 
							
							<h4><br /><br />Special Thanks</h4>
							We would like to thank the following for the graphics that we included:
							<ul>
								<li><a href="http://www.magnt.com/wp-content/uploads/2016/01/404image.png?fbclid=IwAR3O8uBV6HyUyq_nexXQC8Wx4Rfz2mLR_tOHyX4ea7gPq02I54QtzyTRxUE">Error 404 Page</a>
								<br />
								<a href="https://images.ecosia.org/2bfsXq1NKcr2qA7QKMzPl3XWm-c=/0x390/smart/https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fmandatory-safety-signs%2F574%2FISO_7010_M002-512.png?fbclid=IwAR3jTLraOZo7bBlXRoWfHVxG0qjcy6M9OmaGFXwUagZjaxJ5xCA_sq_NeE0">Installation Instructions Picture</a>
								<br />
								<a href="http://pngimg.com/uploads/mark_zuckerberg/mark_zuckerberg_PNG3.png">Mark Zuckerberg</a></li>
							</ul>
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Credits;