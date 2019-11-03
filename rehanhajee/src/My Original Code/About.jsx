import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {goToTop} from 'react-scrollable-anchor';
import './About.css';

class About extends Component {
	componentWillMount() {
        goToTop();
    }
	render() {
        return (
            <div className="background">
				<Helmet>
					<title>About - CPS530 Final Project</title>
				</Helmet>
                <Grid>
                    <Row className="about">
                        <h1 className="underline"><br />Summary</h1>
                        <Col md={11}>
							<h1><br /><u>Laravel</u></h1>
							<p className="about-text">
								<h2>Popularity</h2>
								<p>On GitHub, Laravel’s primary repository has over 47,400 stars. That's more than double the 2<sup>nd</sup> place entry for PHP!</p>
								
								<h2 className="strengths">Strengths</h2>
								<ul>
									<li><h3>Rapid development</h3>
									Adding a REST route is as simple adding one function to the routes.php file. The ORM does away with the need to write low level database code. The controllers make building a full REST API quick and easy.
									</li>
									<br />
									<li><h3>Expressive code</h3>
									Using the Eloquent ORM you can do things like <bdi className="code"> $employee->address->city->name</bdi> or <bdi className="code">$post->comments()->get().</bdi>
									</li>

									<li><h3>Enforced Structure</h3>
									Application code is structured in a predictable way, separating components into an MVC structure.
									</li>

									<li><br /><h3>Environment and configuration management</h3>
									managing development and production environments, and their related configurations (database config, s3 config, etc.) is a breeze.
									</li>

									<li><br /><h3>Flexibility</h3>
									You can use Laravel's template system to build server side rendered apps, or you can use Laravel to provide the REST API and use whatever SPA framework you want, like backbonejs, angularjs, etc. to build the client app.
									</li>
								</ul>
								
								<h2 className="weaknesses">Weaknesses</h2>
								<p>
								Users will receive output slowly due to copy and paste existing code from other projects. Absence of continuation between the versions. Your application will crack or break, if you update the code for the version 4 to version 5.
								</p>
								
								<h2>Usage</h2>
								<p>It was developed with the belief that web development must be an enjoyable and truly fulfilling creative experience. Laravel Web Development simplifies the web development process by easing the common tasks such as routing, authentication, sessions, and caching.
								</p>
							</p>
                        </Col>
                    </Row>
                </Grid>
				<Grid>
					<Row className="about">
                        <p />
                        <Col md={11}>
						<h1><u>React</u></h1>
							<p className="about-text">
								<h2>Popularity</h2>
								<p>It is estimated that more than 1,300 developers and over 94,000 sites utilize ReactJS!</p>
								
								<h2 className="strengths"><br />Strengths</h2>
								<ol>
									<li><h3>Simple Code, Less Bugs</h3>
									React reduces user interface complexity, which is its single most compelling feature and the reason why it's so awesome to use. It is the first mainstream JavaScript framework built on the idea of functional programming. That's great because functional programming leads to code that is easier to reason about.
									</li>
									
									<li><br /><h3>Blazing Fast</h3>
									ReactJS is actually much faster than manually manipulating the Document Object Model (DOM). JavaScript is a reasonably fast language, and typical web apps consist of <i><b>only</b></i> several hundreds of DOM elements. React also supports efficient tactics to achieve 60 frames per second (fps) even in much more complex apps.
									</li>

									<li><br /><h3>Connects Well with Your Existing Code</h3>
									Facebook engineers designed React to integrate nicely with existing codebases. They have invested years into creating the Facebook site, so a complete rewrite just to use React would not be justifiable. It is really easy to use React with jQuery, Angular, Backbone, or any other JavaScript framework.
									</li>

									<li><br /><h3>Learn Once, Use Anywhere</h3>
									Users spend 18 times more time in native apps than on the mobile web. Most products have to cover at least the web, iOS, and Android to be successful today. That usually means tripling the cost of software development as you develop and maintain each platform separately. In such diverse environment, it can be really tricky to provide a consistent experience for users.
									</li>

									<li><br /><h3>Helpful Community</h3>
									Facebook is going to great lengths to embrace community innovation. Speakers from competing technologies like ClojureScript, Cycle.js, and Elm give talks at the official ReactJS conference. Some of the biggest innovations in React were actually inspired by ClojureScript, some were taken from Ember, and some come from Elm.
									</li>
									
									<li><br /><h3>It's Still Good Old JavaScript</h3>
									Elm, ClojureScript, PureScript, and other great languages compete with React.js to be the coolest kid on the block. They all have interesting super-powers JavaScript can't match. However, they have a much higher barrier to entry in the form of an entirely new language and ecosystem.
									</li>
								</ol>
								
								<h2 className="weaknesses"><br />Weaknesses</h2>
								<p>ReactJS has a large learning curve. Being a not full-featured framework, in-depth knowledge is required for integrating a user interface free library into MVC framework. View-orientedness is another one of the weaknesses of ReactJS. It should be found 'Model' and 'Controller' to resolve 'View' problem. Lots of developers dislike JSX Reacts documentation, as the manuals are difficult for new programmers to understand. To make it worse, ReactJS has a large size library.</p>

								<h2>Usage</h2>
								<p>ReactJS is a revolutionary trend in web development, which is in high demand among the developer community. ReactJS is an open source library created by top IT firms and are generally used with HTML tags for user interface purposes. It runs on model-view-controller framework and allows reuse of UI/UX segments. Major apps like Facebook, Instagram, and Netflix are constantly improving their experience and adapting to new frameworks and trends.</p>
							</p>
                        </Col>
                    </Row>
				</Grid>
				
            </div>
        );
   }
}

export default About;
