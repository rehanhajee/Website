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
							<Row>
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
												<h4><i>Trenton Cadet Training Centre</i></h4>
												<li>
													<i>General Training Sergeant</i> • July 2017 - August 2017
													<br />
													<ul>
														<li>• Was responsible for acting as necessary to protect the health, welfare and safety of all General Training course cadets</li>
														<br />
														<li>• Supervised cadets during all scheduled activities and participate when appropriate</li>
														<br />
														<li>• Submitted recommendations for end of course Training Reports</li>
														<br />
														<li>• Instructed cadets on cadet-related lessons, such as Aviation, Drill, Citizenship, and Aerodrome Operations</li>
														<br />
													</ul>
												</li>
												<br /><br />
												<h4><i>Canadore Cadet Training Centre</i></h4>
												<li>
													<i>Flight NCO - Advanced Aviation Technology Course</i> • July 2016 - August 2016
													<br />
													<ul>
														<li>• Assisted and supervised course cadets and maintaining a log stating problems and solutions</li>
														<br />
														<li>• Assisted in supervising and instructing the Flag Party</li>
														<br />
														<li>• Assisted in the development of cadet course reports</li>
														<br />
														<li>• Submitted recommendations for end of summer Training Reports</li>
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
													<i>Science Orientation Operations Team Member</i> • August 2018
													<ul>
														<li>• Organized an activity for the Science Orientation 2018</li>
														<br />
														<li>• Assistted other members when required</li>
													</ul>
												</li>
												<br /><br />
												<li>
													<h3>Ontario Council for Technological Education</h3>
													<i>Co-editor</i> • March 2016 - May 2016
													<ul>
														<li>• Edited a video in a 60-part safety video series for the province of Ontario</li>
														<br />
														<li>• Safety demonstrator on-camera for three videos</li>
													</ul>
												</li>
												<br /><br />
												<li>
													<h3>Ismaili Centre Toronto Audio/Visual Team</h3>
													<i>Member</i> • September 2014 - Present
													<ul>
														<li>• Set up and wrap up microphones, projectors, speakers, etc. for events</li>
														<br />
														<li>• Arrange the equipment neatly after use</li>
														<br />
														<li>• Operate the sound system for the entire building</li>
														<br />
														<li>• Troubleshoot any technical issues on the spot</li>
													</ul>
												</li>
												<br /><br />
												<li>
													<h3>Ismaili Safety Team</h3>
													<i>First Aid Member</i> • December 2013 - Present
													<ul>
														<li>• Provide First Aid at sporting events and community events for up to 20 000 people.</li>
													</ul>
												</li>
												<br /><br />
												<li>
													<h3>Royal Canadian Air Cadets</h3>
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
														<br />
														<li>• Coached the Flag Party, as the Flag Party Commander, to ensure drill is sharp and in time (member from 2012-2016, commander from 2015-2016)</li>
														<br />
														<li>• Was a member of the Squadron Drill Without Arms Team (2012-2016), which is an elite group of 16 cadets who rehearse regularly to put together a silent drill routine for competitions</li>
													</ul>
												</li>
												<br /><br />
												<li>
													<h3>Willowdale Jamatkhana Audio/Visual Team</h3>
													<i>Lead</i> • July 2007 - Present
													<ul>
														<li>• Ensure set up and wrap up of microphones, projectors, speakers, etc. for events, arrange equipment during events (e.g. New Years event for over 1000 people)</li>
														<br />
														<li>• Arrange the equipment neatly after use</li>
														<br />
														<li>• Operate the sound system for the entire building</li>
														<br />
														<li>• Troubleshoot any technical issues on the spot</li>
													</ul>
												</li>
												<br /><br />
												<li>
													<h3>Ismaili Volunteer Corps</h3>
													<i>Member</i> • November 2006 - Present
													<ul>
														<li>• Assist in allocating and completing daily operational tasks for the Ismaili community</li>
														<br />
														<li>• Helping the sick, elderly, and disabled members of the Toronto Ismaili community</li>
														<br />
														<li>• Operate the sound system for the entire building</li>
													</ul>
												</li>
											</ul>
										</section>
										<hr />
										<section>
											<header><h2 className="left"><u>Extra Curricular Activities</u></h2></header>
											<ul>
												<li>
													<h3>Don Mills CI Stage Crew</h3>
													<i>Co-President</i> • November 2013 - June 2016
													<ul>
														<li>• Student-run organization which assistted in most Audio/Visual components for school events</li>
														<br />
														<li>• Made sure students are excused if they were planning on being absent for a class to assist with an event</li>
														<br />
														<li>• Trained new members with the equipment</li>
													</ul>
												</li>
											</ul>
										</section>
										<hr />
										<section>
											<header><h2 className="left"><u>Awards and Qualifcations</u></h2></header>
											<ul>
												<li>Warrant Officer Second Class Cynthia Tsang Memorial Leadership Award for outstanding leadership skills and inspiring junior cadets (2017)</li>
												<br />
												<li>Ontario Volunteer Service Award – Youth (2017)</li>
												<br />
												<li>First Aid level 'C' with AED training (2017)</li>
												<br />
												<li>Restricted Operator’s Certificate – Aeronautical (2015)</li>
												<br />
												<li>Workplace Hazardous Materials Information System (WHMIS) for Workers (2015)</li>
												<br />
												<li>Community Service Honours, Level 2 Gold, Ismaili Students Total Achievement and Recognition (ISTAR) Awards (2015)</li>
												<br />
												<li>Royal Canadian Air Cadet Service Medal for completing four continuous years with the Royal Canadian Air Cadets (2015), and two bars for completing two additional years (2016, 2017)</li>
												<br />
												<li>Duke of Edinburgh Bronze Award for involvement in sports, music and community service (2013)</li>
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
