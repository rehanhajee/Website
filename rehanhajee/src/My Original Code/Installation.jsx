import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {goToTop} from 'react-scrollable-anchor';
import './Installation.css';

class Installation extends Component {
	componentWillMount() {
        goToTop();
    }
	render() {
		return (
			<div className="background">
				<Helmet>
					<title>Installation - CPS530 Final Project</title>
				</Helmet>
				<Grid>
					<Row className="installation">
						<h1 className="underline"><br />Installation</h1>
						<Col md={11} className="installation-text">
							<p >
								<Image className="image" src="https://images.ecosia.org/2bfsXq1NKcr2qA7QKMzPl3XWm-c=/0x390/smart/https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fmandatory-safety-signs%2F574%2FISO_7010_M002-512.png" />
								<p>
								This site was created using Google Cloud Platform. To learn more about it, you can read about it <a href="https://cloud.google.com/">here</a>.
								<br /><br />
								When installing frameworks, the framwork that you are using for back-end <b>needs to be installed before</b> you install the front-end framework.
								<br /><br />
								The two frameworks that we used are <a href="https://laravel.com/">Laravel</a> (for server-side), and <a href="https://reactjs.org/">React</a> (for client-side). We will explain how to install both frameworks on Windows below.
								<br />
								</p>
							</p>
							<h2 className="Laravel"><br /><u>Laravel</u></h2>
							<p >
								<ol>
									<li><b>1.</b> First, install PHP. To do so, download PHP from the PHP website <a href="http://php.net/downloads.php">here</a>.</li>
									<li><b>2.</b> Laravel needs a PHP manager named composer. Download the <a href="https://getcomposer.org/Composer-Setup.exe" >Composer-Setup.exe</a> and run it. After doing so, the command "composer" is available.</li>
									<li><b>3.</b> Now that composer is installed, we can use the "composer" command to install Laravel. The command can be used in the following way:</li>
									<ul className="code">
										<li>composer create-project --prefer-dist laravel/laravel project_name "<b>5.4.*</b>" </li>
									</ul>
									<li><b>4.</b> A local development server must be created. For our purpose, we will use PHP's built-in development server. To start the server, use the following command:</li>
									<ul className="code">
										<li>php artisan serve </li>
									</ul>
									<li><b>5.</b> Now, if you visit <a href="http://localhost:8000">http://localhost:8000</a>, you will see the Laravel Welcome page.</li>
								</ol>
							</p>
							<h2 className="React"><br /><u>React.JS</u></h2>
							<p>
								<ol>
									<li><b>1.</b> First, install Node.js which is platform needed for ReactJS development. To do so, first download the appropriate version from the <a href="https://nodejs.org/en/">Node.js website</a> and install it.</li>
									<li><b>2.</b> Browse through the desktop and install the Create React App using command prompt as shown below:</li>
									<ul>
										<li className="code"> 
										cd C:\Users\Tutorialspoint\Desktop\ 
										<br />
										npm install -g create-react-app 
										<br />
										create-react-app my-app
										</li>
									</ul>
									<li><b>3.</b> Now we need to install all the needed packages. The command to do so is the following:</li>
									  <ul>
										<li className="code"> cd my-react-app && npm install </li>
									  </ul>
									<li><b>4.</b> Lastly, we can now run the application locally. To do so, run the following command: </li>
										<ul>
											<li className="code"> npm start </li>
										</ul>
								</ol>
							</p>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Installation;