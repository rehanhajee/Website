import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {goToTop} from 'react-scrollable-anchor';
import './Home.css';

export default class Home extends Component {
	componentWillMount() {
        goToTop();
    }
    render() {
        return (
			<div className="background">
				<Helmet>
					<title>Home - Rehan Hajee</title>
				</Helmet>
				<Container className="home">
					<main>
						<article>
							<section>
								<br /><br />
								<figure className="centre"><Image className="profilePic" src={require('../images/profilePicture.JPG')}  /></figure>
								<h1><br /><u>Hi, I'm Rehan Hajee!</u></h1>
								<br />
								<div className="centre">Experienced Officer with a demonstrated history of working in the military industry. Skilled in Java, HTML, Unix, Adobe Photoshop, and Adobe Premiere Pro. Strong professional with a Bachelor of Science - BS focused in Computer Science from Ryerson University.</div>
							</section>
						</article>
						<article>
							<Row >
								<Col md={10}>
									<div className="home-text">
										<section>
											<header><h2 className="left"><u>Skills</u></h2></header>
											<ul>
												<li>• Highly proficent in Java Programming</li>
												<br />
												<li>• Proficent in C, HTML, and Python Programming</li>
												<br />
												<li>• Proficient in Microsoft Office Suite (Word, Excel, PowerPoint, Publisher, OneNote)</li>
												<br />
												<li>• Proficent in Adobe Photoshop, Adobe Premiere, Adobe Illustrator, Adobe Flash</li>
												<br />
												<li>• Proficient in Windows, Mac and Linux operating systems</li>
												
											</ul>
										</section>
										<hr />
										<section>
											<header><h2 className="left"><u>Education</u></h2></header>
											<ul>
												<li>
													<h3>Ryerson University</h3>
													<i>Bachelor of Science</i>
													<br /><i>Major in Computer Science</i> • September 2016 - April 2020 (Expected)
													<ul>
														<li>
															<i>Academics:</i> Computer science courses include Introduction to C and UNIX, Data Structures, Social Issues, Ethics and Professionalism, Computer Security, Web Systems Development, Database Systems
														</li>
														<br /><br />
														<li>
															<i>Projects:</i> Created a website with Laravel and React showing installation steps for these frameworks, created a Java program which displayed data from a personally created SQL database, created a daily appointment calendar in Java, which includes a partial contact management system
														</li>
														<br /><br />
														<li>
															<i>Awards:</i> Entrance Scholarship
														</li>
													</ul>
												</li>
												<br /><br />
												<li>
													<h3>Don Mills Collegiate Institute</h3>
													<i>Gifted Intensive Program, Ontario Secondary School Diploma</i> • September 2012 - June 2016
													<ul>
														<li><i>Honors:</i> Ontario Scholar</li>
														<br /><br />
														<li><i>Activities:</i> Co-President of DMCI Stage Crew, Member of Super Wacky About Tech (SWAT) Team, Eco Team, French Club, Library Helper</li>
													</ul>
												</li>
											</ul>
										</section>
										<hr />
										<section>
											<header><h2 className="left"><u>Work Experience</u></h2></header>
											<ul>
												<h3>Department of National Defence</h3>
												<h4><i>166 Royal Canadian Air Cadet Squadron</i></h4>
												<li>
													<i>Assistant Training Officer </i> • August 2019 - Present
													<ul>
														<li>• Responsible for acting as necessary to protect the health, welfare and safety of cadets at the squadron</li>
														<br />
														<li>• Assist Training Officer to ensure weekly training gets completed successfully</li>
													</ul>
												</li>
												<br /><br />
												<h4><i>Trenton Cadet Training Centre</i></h4>
												<li>
													<i>Drill and Ceremonial Course Administration Officer</i> • June 2019 - August 2019
													<ul>
														<li>• Was responsible for acting as necessary to protect the health, welfare and safety of the Drill and Ceremonial course cadets and staff cadets</li>
														<br />
														<li>• Ensured any required forms are completed accurately and correctly</li>
														<br />
														<li>• Assisted the Training Centre Administration Officer with Training Centre-based tasks</li>
													</ul>
												</li>
												<br /><br />
												<li>
													<i>General Training Course Flight Instructor</i> • July 2018 - August 2018
													<ul>
														<li>• Was responsible for acting as necessary to protect the health, welfare and safety of the General Training course cadets and staff cadets</li>
														<br />
														<li>• Ensured a steady stream of information to the flight commander, staff cadets, and course cadets</li>
														<br />
														<li>• Assisted in completing end of course Training Reports and analysis of instruction, training, conduct, and recommendations for improvements.</li>
													</ul>
												</li>
												<br /><br />
												<h3>Royal Canadian Air Cadets</h3>
												<li>
													<i>Trenton Cadet Training Centre</i>
													<br />
													<i>General Training Sergeant</i> • July 2017 - August 2017
													<br />
													<ul>
														<li>• Was responsible for acting as necessary to protect the health, welfare and safety of all General Training course cadets</li>
														<li>• Supervised cadets during all scheduled activities and participate when appropriate</li>
														<li>• Submitted recommendations for end of course Training Reports</li>
														<li>• Instructed cadets on cadet-related lessons, such as Aviation, Drill, Citizenship, and Aerodrome Operations</li>
													</ul>
												</li>
												<br /><br />
												<li>
													<i>Canadore Cadet Training Centre</i>
													<br />
													<i>Flight NCO - Advanced Aviation Technology Course</i> • July 2016 - August 2016
													<br />
													<ul>
														<li>• Assisted and supervised course cadets and maintaining a log stating problems and solutions</li>
														<li>• Assisted in supervising and instructing the Flag Party</li>
														<li>• Assisted in the development of cadet course reports</li>
														<li>• Submitted recommendations for end of summer Training Reports</li>
													</ul>
												</li>
												<br /><br />
												<li>
													<i>166 Bulldog Royal Canadian Air Cadet Squadron</i>
													<br />
													<i>Warrant Officer Second Class, Deputy Squadron Commander, Administration Warrant Officer</i> • January 2011 - June 2017
													<br />
													<ul>
														<li>• Ensured all cadets receive a “call out” with important upcoming information</li>
														<br />
														<li>• Prepared weekly emails to instructors to inform them what to teach</li>
														<br />
														<li>• Created documents from scratch (e.g. "Call out" spreadsheet, a chart for tagging (fundraising) with locations, program for the final parade)</li>
														<br />
														<li>• Instructed lessons on Citizenship, Drill, Leadership, and Survival</li>
														<li>• Coached the Flag Party, as the Flag Party Commander, to ensure drill is sharp and in time (member from 2012-2016, commander from 2015-2016)</li>
														<li>• Was a member of the Squadron Drill Without Arms Team (2012-2016), which is an elite group of 16 cadets who rehearse regularly to put together a silent drill routine for competitions</li>
													</ul>
												</li>
												<br /><br />
												<h3>Metroland</h3>
												<li>
													<i>Newspaper Carrier</i> • November 2013 - April 2014
													<br />
													<ul>
														<li>• Delivered newspapers and flyers in my neighbourhood</li>
													</ul>
												</li>
											</ul>
										</section>
										<hr />
										<section>
											<header><h2 className="left"><u>Volunteer Experience</u></h2></header>
											<ul>
												<li>
													<h3>Ryerson University</h3>
													<i>Science Orientation Operations Team Member </i>• August 2018
													<ul>
														<li>• Organized an activity for the Science Orientation 2018</li>
														<li>• Assistted other members when required</li>
													</ul>
												</li>
												<br /><br />
												<li>
													
													Put your second most recent volunteer position here.
													<br /><i>Your position • start Month, Year - end Month, Year</i>
												</li>
											</ul>
										</section>
										<hr />
										<section>
											<header><h2 className="left"><u>Awards</u></h2></header>
											<ul>
												<li>
													Put your most recent award here.
													<br /><i>Month recieved, Year recieved</i>
													<br /><br />
													Put your second most recent award here.
													<br /><i> Month recieved, Year recieved</i>
													<br /><br />
													Put all other awards here.
													<br /><i> Month recieved, Year recieved</i>
												</li>
											</ul>
										</section>
									</div>
								</Col>
							</Row>
						</article>
					</main>
				</Container>
			</div>
        );
	}
}
