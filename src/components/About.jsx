import {Container, Image} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {Accordion, AccordionItem } from '@szhsin/react-accordion';

import chevronDown from "../images/chevron-down.svg";


import './About.css';

function About() {

	return (
		<div className="background">
			<Helmet>
				<title>About - Rehan Hajee</title>
			</Helmet>
			<Container className="about">
				<main>
					
					<article>
						<header><h1 className="heading"><b>I'm Rehan Hajee</b></h1></header>
						<br />
						<div className="centre">Cadet Instructor Cadre (CIC) Officer with a demonstrated history of working with the Canadian Cadet Organization (CCO). Skilled in Java, Adobe Photoshop, Adobe Premiere Pro, Unix, HTML, and Cascading Style Sheets (CSS). Strong professional with a Bachelor of Science - Honours (BSc - Hons) focused in Computer Science from Toronto Metropolitan University (formally Ryerson University).</div>
					</article>

					<article className='about-text'>
						<hr />

						<section>
							<header><h2 className="heading"><u>Skills</u></h2></header>
							<ul>
								<li>Highly proficient in HTML/CSS, JavaScript, Java, and SQL programming</li>
								<li>Proficient in Python, C++, and C programming</li>
								<li>Proficient in Microsoft Office Suite (Excel, Access, Word, PowerPoint, Publisher), Microsoft Visio, Microsoft SharePoint, Microsoft PowerApps</li>
								<li>Proficient in Adobe Photoshop, Adobe Premiere, Adobe Illustrator, Adobe Animate</li>
								<li>Proficient in Linux/UNIX operating systems</li>
								<li>Frameworks/Technologies: Git, Angular.JS, Bootstrap, MySQL, React</li>
							</ul>
						</section>

						<hr />

						<section>
							<header><h2 className="heading"><u>Education</u></h2></header>

							<section>
								<h3>Toronto Metropolitan University (formally Ryerson University)</h3>
								<h5><i>Bachelor of Science - Honours</i></h5>
								<h5><i>Major in Computer Science</i>  &nbsp; September 2016 - June 2020</h5>
								<ul>
									<li><i>Relevant Courses:</i> Web Systems Development, Data Structures, Database Systems I, Autonomous Mobile Robotics, Introduction to C and UNIX</li>
									<li><i>Projects:</i> Can be found <a href="/Programming">here</a>. </li>
									<li><i>Awards:</i> Entrance Scholarship, Dean's List</li>
									<li><i>Activities:</i> RIMSA Student Group, Ryerson Tech Society</li>
								</ul>
							</section>
							
							<section>
								<h3>Don Mills Collegiate Institute</h3>
								<h5><i>Ontario Secondary School Diploma, Gifted Intensive Program</i> &nbsp; September 2012 - June 2016</h5>
								<ul>
									<li><i>Awards:</i> Ontario Scholar</li>
									<li><i>Activities:</i> Co-President of DMCI Stage Crew, Member of Super Wacky About Tech (SWAT) Team, Eco Team, French Club, Library Helper</li>
								</ul>
							</section>
							
						</section>

						<hr />

						<section>
							<header><h2 className="heading"><u>Work Experience</u></h2></header>
							
							{/*<Accordion allowMultiple>
							<AccordionItem header={<header><h3><Image className="chevron" src={chevronDown}/>Canadian Armed Forces</h3></header>} initialEntered>
									<Accordion allowMultiple>
										<AccordionItem header={<h4><Image className="chevron" src={chevronDown}/><i>Regional Support Cadet Unit (Central)</i></h4>} initialEntered>
										<h5><i>J1 HR Supervisor (Program Staffing), J1 Sr HR Admin (Program Staffing) </i> &nbsp; September 2023 - Present</h5>
										</AccordionItem>
									</Accordion>
								</AccordionItem>
							</Accordion>*/}
							
							
							<section>
								<header><h3>Canadian Armed Forces</h3></header>
								<section>
									<h4><i>Regional Support Cadet Unit (Central)</i></h4>
									<h5><i>J1 Program Staffing Supervisor, J1 Sr HR Admin (Program Staffing) </i> &nbsp; September 2023 - Present</h5>
									<ul>
										<li>Supervise the performance and efficiency of the HR Specialist (CTC Staffing) Clerks</li>
										<li>Manage Civilian Instructor and Civilian Volunteer files for the Region</li>
										<li>Prepare and distribute Class B employment opportunity messages using REO for employment opportunities, receive applications for Class B employment and prepare files for review by the Review Board Secretary</li>
										<li>Coordinate the selection of adult staff and staff cadets for summer employment across Canada</li>
										<li>Enter data into CFTPO during the tasking process, conduct appropriate staff checks for taskings</li>
										<li>Recommend procedural and functional processes to improve personnel selection</li>
									</ul>
									<h5><i>J4 Summer Movements Clerk</i> &nbsp; April 2023 - September 2023</h5>
									<ul>
										<li>Set up Travel Identification Numbers (TINs) for Staff Cadets and Course Cadets that would be travelling via train, plane, or other commercial methods</li>
										<li>Organized travel for over 300 Cadets travelling across the country, ensuring they arrived based on the Cadet Training Centre (CTC) Policies and Procedures for Out of Region Cadets</li>
										<li>Reconciled credit card statements to ensure authorized purchases were reflected accurately, noted and informed all descrepencies that needed investigating to my supervisor</li>
									</ul>
								</section>

								<section>
									<h4><i>Blackdown Cadet Training Centre (CTC)</i></h4>
									<h5><i>Survival Instructor Course (SIC) Logistics Officer, Flight Commander</i> &nbsp; June 2022 - August 2022</h5>
									<ul>										
										<li>Identified and managed all material requirements for SIC and acting as the OPI for all logistical support</li>
										<li>Issued, retrieved, and maintained required materials to and from SIC personnel and ensured that all non-serviceable materials were marked accordingly</li>
										<li>Monitored training conditions and advised Course Commander, as required</li>
										<li>Provided mentorship and guidance to Staff Cadets to allow them to practice leadership and management skills</li>
										<li>Assisted with the collection, processing, and organization of Blackdown CTC’s After Action Report and Lessons Learned</li>
									</ul>
								</section>

								<section>
									<h4><i>Regional Support Cadet Unit (Central)</i></h4>
									<h5><i>J1 HR Non-Effective Strength (NES) Clerk</i> &nbsp; August 2021 - June 2022</h5>
									<ul>
										<li>Logged NES members and kept track of outgoing NES/NOI Letters (date sent, tracking numbers) and created time-based queries as letters are time sensitive</li>
										<li>Prepared a monthly NES report sent to Formation (Senior Leadership) for visibility on NES members</li>
										<li>Initiated the archival process of previously employed Civilian Instructors alphabetically into boxes, with an included table of contents</li>
										<li>Assisted with filing Route Letters and Pay Sheets accordingly</li>
										<li>Co-created the NES Database and maintained it to ensure information was always up to date</li>
									</ul>
									<h5><i>J1 Staffing Clerk</i> &nbsp; May 2021 - August 2021</h5>
									<ul>
										<li>Screened and hired staff cadets and adult staff, ensuring that all employment conditions were met</li>
										<li>Accurately entered all applicable applicant data into the Cadet Training Centre (CTC) Staffing database, handled confidential information</li>
										<li>Assisted in the production of RL packages for Adult Staff (vCTC) and Staff Cadets (vCTC + summer CAP) and are submitted to PSS</li>
										<li>Compiled a list of references referring to Civilian Volunteers from CATOs, Army/Navy/Air Cadet Leagues, Natl CJCR Sp Gp Orders, and QR&O (Cadets)</li>
										<li>Assisted with filing Route Letters and Pay Sheets accordingly</li>
										<li>Compared Police Record Check / Vulnerable Sector Screening (PRC/VSS) and Reliability Status (RS) dates for all members in MonitorMASS to information in the Program Staffing Database and noted discrepancies</li>
										<li>Ensured members’ PRC/VSS were updated accordingly and provided the appropriate agency’s request letters/forms</li>
										<li>Assisted J1 Recruiting with sending out Phase One enrolment packages</li>
									</ul>
								</section>

								<section>
									<h4><i>National Cadet and Junior Canadian Rangers (CJCR) Support Group</i></h4>
									<h5><i>LOO4 - EN-A4 Air Training Team Leader </i> &nbsp; June 2020 - August 2020</h5>
									<ul>
										<li>Facilitated the production of accessible, organized, and standardized lesson plans and training aids for all applicable corps and squadron cadet training classes</li>
										<li>Ensured subordinates were checking in regularly to ensure their assigned tasks were completed on time</li>
									</ul>
								</section>

								<section>
									<h4><i>166 Royal Canadian Air Cadet Squadron</i></h4>
									<h5><i>Training Officer </i> &nbsp; August 2019 - Present</h5>
									<ul>
										<li>Schedule lessons and instructors for weekly training</li>
										<li>Plan activities, submit Corps/Squadron Activity Requests (CSARs) as required</li>
										<li>Evaluate Instructors to ensure they are meeting or exceeding the standard, provide feedback, as required</li>
										<li>Update the Squadron's Microsoft SharePoint pages to prioritize important information</li>
									</ul>
								</section>	
							</section>

							<section>
								<header><h3>Department of National Defence</h3></header>
								
								<section>
									<h4><i>Trenton Cadet Training Centre</i></h4>
									<h5><i>Drill and Ceremonial Course Administration Officer</i> &nbsp; June 2019 - August 2019</h5>
									<ul>
										<li>Ensured all required forms are completed accurately and correctly</li>
										<li>Assisted the Cadet Training Centre Administration Officer with Training Centre-based tasks</li>
										<li>Acted as necessary to protect the health, welfare and safety of the Drill and Ceremonial course cadets and staff cadets</li>
									</ul>
								
									<h5><i>General Training Course Flight Instructor</i> &nbsp; July 2018 - August 2018</h5>
									<ul>
										<li>Ensured a steady stream of information to the flight commander, staff cadets, and course cadets</li>
										<li>Assisted in completing end of course Training Reports and analysis of instruction, training, conduct, and recommendations for improvements.</li>
										<li>Acted as necessary to protect the health, welfare and safety of the General Training course cadets and staff cadets</li>
									</ul>
								</section>
								
							</section>

							<section>

								<header><h3>Royal Canadian Air Cadets</h3></header>

								<section>
									<h4><i>Trenton Cadet Training Centre</i></h4>
									<h5><i>General Training Sergeant</i> &nbsp; July 2017 - August 2017</h5>
									<ul>
										<li>Submitted recommendations for end of course Training Reports</li>
										<li>Instructed cadets on cadet-related lessons, such as Aviation, Drill, Citizenship, and Aerodrome Operations</li>
										<li>Supervised cadets during all scheduled activities and participate when appropriate</li>
										<li>Acted as necessary to protect the health, welfare and safety of all General Training course cadets</li>
									</ul>
								</section>

								<section>
									<h4><i>Canadore Cadet Training Centre</i></h4>
									<h5><i>Flight NCO - Advanced Aviation Technology Course</i> &nbsp; July 2016 - August 2016</h5>
									<ul>
										<li>Assisted and supervised course cadets and maintaining a log stating problems and solutions</li>
										<li>Assisted in supervising and instructing the Flag Party</li>
										<li>Assisted in the development of cadet course reports</li>
										<li>Submitted recommendations for end of summer Training Reports</li>
									</ul>
								</section>

							</section>

							<section>

								<header><h3>Metroland</h3></header>
								<h5><i>Newspaper Carrier</i> &nbsp; November 2013 - April 2014</h5>
								<ul>
									<li>Delivered newspapers and flyers to proper addresses in my neighbourhood while meeting specific and unique cutomer demands and requests</li>
								</ul>

							</section>

						</section>

						<hr />

						<section>

							<header><h2 className="heading"><u>Volunteer Experience</u></h2></header>
							
							<section>
								<h3>Aga Khan Economic Planning Board for Canada</h3>
								<h5><i>Ismaili Business Support Network (IBSN) CRM Lead</i> &nbsp; October 2021 - Present</h5>
								<ul>
									<li>Maintain the IBSN CRM PowerApps app as needed</li>
									<li>Update the User Interface and Experience to ensure important information is easily accessible</li>
								</ul>
							</section>
							
							<section>
								<h3>Ryerson University</h3>
								<h5><i>Science Orientation Operations Team Member</i> &nbsp; August 2018</h5>
								<ul>
									<li>Organized an activity for the Science Orientation 2018</li>
									<li>Assisted other members when required</li>
								</ul>
							</section>
							
							<section>
								<h3>Ontario Council for Technological Education</h3>
								<h5><i>Co-editor</i> &nbsp; March 2016 - May 2016</h5>
								<ul>
									<li>Edited a video in a 60-part safety video series for the province of Ontario</li>
									<li>Safety demonstrator on-camera for three videos</li>
								</ul>
							</section>
							
							<section>
								<h3>Ismaili Centre Toronto</h3>
								<h5><i>Audio/Visual Team Member</i> &nbsp; September 2014 - Present</h5>
								<ul>
									<li>Set up and wrap up microphones, projectors, speakers, etc. in an organized fashion for events</li>
									<li>Operate the sound system for the entire building and troubleshoot any technical issues on the spot</li>
								</ul>
							</section>
							
							<section>
								<h3>Ismaili Safety Team</h3>
								<h5><i>First Aid Member</i> &nbsp; December 2013 - Present</h5>
								<ul>
									<li>Provide First Aid at sporting events and community events for up to 20 000 people.</li>
								</ul>
							</section>
							
							<section>
								<h3>Royal Canadian Air Cadets</h3>
								<h4><i>166 Bulldog Royal Canadian Air Cadet Squadron</i></h4>
								<h5><i>Warrant Officer Second Class, Deputy Squadron Commander, Administration Warrant Officer</i> &nbsp; January 2011 - June 2017</h5>
								<ul>
									<li>Ensured all cadets receive a “call out” with important upcoming information</li>
									<li>Prepared weekly emails to instructors to inform them what to teach</li>
									<li>Created documents from scratch (e.g. "Call out" spreadsheet, a chart for tagging (fundraising) with locations, program for the final parade)</li>
									<li>Instructed lessons on Citizenship, Drill, Leadership, and Aircrew Survival</li>
									<li>Coached the Flag Party, as the Flag Party Commander, to ensure drill is sharp and in time (Member from 2012-2016, Commander from 2015-2016)</li>
									<li>Was a member of the Squadron Drill Without Arms Team (2012-2016), which is an elite group of 16 cadets who rehearse regularly to put together a silent drill routine for competitions</li>
								</ul>
							</section>

							<section>
								<h3>Willowdale Jamatkhana</h3>
								<h5><i>Audio/Visual Team Member, Team Lead (2015 – Present)</i> &nbsp; July 2007 - Present</h5>
								<ul>
									<li>Manage a team of 15 volunteers to set up, operate, troubleshoot, and wrap up audio/visual equipment for events (e.g. video showings for over 1,500 guests)</li>
									<li>Set up and wrap up microphones, projectors, speakers, etc. in an organized fashion for events</li>
									<li>Operate the sound system for the entire building and troubleshoot any technical issues on the spot</li>
									<li>Schedule members to manage the system for daily prayers based on their availability</li>
									<li>Maintain inventory of equipment, keeping track of who has requested what equipment</li>
									<li>•	Led a comprehensive AV modernization initiative, evaluating and procuring projectors, mounting systems, screens, and cabling to establish a new presentation standard and significantly enhance the viewing experience</li>
								</ul>
							</section>

							<section>
								<h3>Ismaili Volunteer Corps</h3>
								<h5><i>Member, Team Lead (2021 – 2022)</i> &nbsp; November 2006 - Present</h5>
								<ul>
									<li>Allocate and complete daily operational tasks for the Ismaili community centre operations</li>
									<li>Helping the sick, elderly, and disabled members of the Toronto Ismaili community</li>
									<li>Facilitate large-scale events such as the World Partnership Walk, a fundraising event with 40,000 participants</li>
								</ul>
							</section>
							
						</section>

						<hr />

						<section>
							<header><h2 className="heading"><u>Extra Curricular Activities</u></h2></header>
							<section>
								<h3>Ryerson Ismaili Muslim Student Association (RIMSA)</h3>
								<h5><i>President</i> &nbsp; June 2018 - June 2019</h5>
								<ul>
									<li>Liaised between RIMSA members and executive members to ensure events were run smoothly</li>
									<li>Secured funding for large-scale events through Ryerson Student Union and private donors</li>
								</ul>
								<h5><i>Treasurer</i> &nbsp; April 2017 – June 2018, September 2019 – June 2020</h5>
								<ul>
									<li>Manage funds used and received by the ISA</li>
									<li>Created yearly budgets and ensured that events were planned and implemented within the financial means of the club</li>
								</ul>
							</section>

							<section>
								<h3>Don Mills CI Stage Crew</h3>
								<h5><i>Co-President</i> &nbsp; November 2013 - June 2016</h5>
								<ul>
									<li>Student-run organization which assisted in most Audio and Visual components for school events</li>
									<li>Ensured students were marked excused for a class if they were assisting with an event</li>
									<li>Trained new members with the audio and lighting equipment</li>
								</ul>
							</section>

						</section>

						<hr />

						<section>
							<header><h2 className="heading"><u>Awards and Qualifcations</u></h2></header>
							<ul>
								<li>First Aid level 'C' with AED training (2025)</li>
								<li>Duke of Edinburgh Gold Level (2023)</li>
								<li>Workplace Hazardous Materials Information System (WHMIS) 2015 Orientation (2022)</li>
								<li>Psychological First Aid - Self-Care (2021)</li>
								<li>Psychological First Aid - Caring for Others (2021)</li>
								<li>Warrant Officer Second Class Cynthia Tsang Memorial Leadership Award for outstanding leadership skills and inspiring junior cadets (2017)</li>
								<li>Ontario Volunteer Service Award – Youth (2017)</li>
								<li>Restricted Operator’s Certificate – Aeronautical (2015)</li>
								<li>Community Service Honours, Level 2 Gold, Ismaili Students Total Achievement and Recognition (ISTAR) Awards (2015)</li>
								<li>Royal Canadian Air Cadet Service Medal for completing four continuous years with the Royal Canadian Air Cadets (2015), and two bars for completing two additional years (2016, 2017)</li>
								<li>Duke of Edinburgh Bronze Award for involvement in sports, music and community service (2013)</li>
							</ul>
						</section>

					</article>

				</main>

			</Container>
		</div>
	);
}

export default About;
