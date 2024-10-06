import {Container} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';

import './Media.css';
import { REACT_APP_STORAGE_BUCKET } from '../config.js';

function Media() {

	// eslint-disable-next-line no-lone-blocks
	function video(link, title, type) {
		return (
			<article>
				<video width="80%" controls controlsList="nodownload">
					<source src={"https://firebasestorage.googleapis.com/v0/b/" + REACT_APP_STORAGE_BUCKET + "/o/" + link} title={title} type={type} />
				</video>
			</article>
		);
	}

	return (
		<div className="background">
			<Helmet>
				<title>Media - Rehan Hajee</title>
			</Helmet>
			<Container className="media">
				<main>
					<section className="media-text">
						<article>
							<header><h1 className="heading"><b>Media Production</b></h1></header>
							<br />
							The following video projects include a preview of some of the things I have worked on.
						</article>
						
						<br />
							
						<article>
							<h2 className="media-heading">How to Make a Grilled Cheese Sandwich</h2>
							<h5 className="media-subheading">
								<b>Credit:</b> Camera Operator, Director, Editor
								<br />
								<b>Software used:</b> Adobe Premiere, Adobe Audition, Adobe Photoshop, Adobe Flash
								<br />
								{/*<b>Original Soundtrack: </b><a href="https://www.youtube.com/watch?v=3ssL8vx7Xhg">YouTube</a>*/}
							</h5>
							<b>Description:</b> This video is a short multimedia tutorial on how to make a grilled cheese sandwich. The tutorial had to consist of original videos captured by camcorder or digital/phone camera, original photographs taken by myself as well as original sounds I sampled myself. Sound effects, royalty-free soundtrack music and graphics could be taken from digital archives or other online sources in addition to the original material. 
							<br />
							{video("How%20to%20Make%20a%20Grilled%20Cheese%20Sandwich.mp4?alt=media&token=6a38b38c-9b85-4711-a9f1-cc816d3f73ca", "title", "video/mp4")}
							<h5 className="media-subheading"><b>Video:</b> <a href="https://drive.google.com/file/d/1bREweEcyuGMbZ0fBbfEHaPch53A_7Y9T/view?usp=sharing">Google Drive</a></h5>
						</article>

						<br />

						<article>
							<h2 className="media-heading">Cool School: Canadian Mousse</h2>
							<h5 className="media-subheading">
								<b>Credit:</b> Editor, Writer
								<br />
								<b>Software used:</b> Adobe Premiere, Adobe Audition
							</h5>
							For this project, we were given a task to select an idea for a conversation that realistically might be overheard in schools, similar to reality TV. This specific video touches on the topic of inclusion and belonging. With our collaboration with YSY Studios, we were able to use multiple cameras and a boom mic for recording audio.
							<br />
							{video("Cool%20School.mp4?alt=media&token=e1c56468-c57d-4a34-9275-b4c7b8d6a57f", "title", "video/mp4")}
							<h5 className="media-subheading"><b>Video:</b> <a href="https://drive.google.com/file/d/1YE0GTl48Py0MXdA0Nr9MBaDQIpNEU0sN/view?usp=sharing">Google Drive</a></h5>
						</article>

						<br />

						<article>
							<h2 className="media-heading">Chase Scene</h2>
							<h5 className="media-subheading">
								<b>Credit:</b> Camera Operator, Director, Editor, Actor, Writer
								<br />
								<b>Software used:</b> Adobe Premiere, Adobe Audition, Adobe Photoshop
							</h5>
							The concept for the chase scene was loosely based on a chase scene that could be found in a movie. The project had to include multiple sound layers with sound effects.
							<br />
							{video("Chase%20Video.avi?alt=media&token=34389aaa-72d4-43e6-89fa-eaec85b8c03a", "title", "video/avi")}
							<h5 className="media-subheading"><b>Video:</b> <a href="https://drive.google.com/file/d/1NJT_VS-Ywusx1m__Rnu3PwDXcWxDi8Bb/view?usp=sharing">Google Drive</a></h5>
						</article>

						<br />

						<article>
							<h2 className="media-heading">The Cinema Nuisance</h2>
							<h5 className="media-subheading"><b>Credit:</b> Camera Operator</h5>
							This was a silent film project based on the silent films from the early 1900s. The project was sped up to give it more of a realistic approach to early silent films.
							<br />
							<b>Note:</b> The content of this video is purely fictional, is not intended to represent or depict any actual event, person, or entity, and any such similarities are purely coincidental.
							<br />
							{video("The%20Cinema%20Nuisance.mp4?alt=media&token=8d8d0e28-34e1-4361-a2f5-6b1465048203", "title", "video/mp4")}
							<h5 className="media-subheading"><b>Video:</b> <a href="https://drive.google.com/file/d/1XcITMc3vaEmtRMvXmNDTeMokNk3RMhkN/view?usp=sharing">Google Drive</a></h5>
						</article>

						<br />
						
						<article>
							<h2 className="media-heading">toolSAFE</h2>
							<h5 className="media-subheading">
								<b>Credit:</b> Co-editor, On-screen Demonstrator 
								<br />
								<b>Software used:</b> Adobe Premiere
							</h5>
							This was a 60-part safety video series for the Ontario Council for Technological Education. The toolSAFE resources were created to address safety training in all 10 tech subject areas. For this project, I edited one video, and was fortunate enough to be an on-screen demonstrator for two videos. I was also able to assist in securing the film location for the Intro scene.
							<br />
							<h5 className="media-subheading">
								<b>Video Links: </b>
								<br />
								<b>Editor:</b> <a href="https://www.octe.ca/en/resources/resource-folder/toolsafe/toolsafe-tgj-video-equipment">Video Equipment</a>
								<br />
								<b>On-Screen demonstrator:</b> <a href="https://www.octe.ca/en/resources/resource-folder/toolsafe/toolsafe-tgj-audio-board">Audio Board</a>, <a href="https://www.octe.ca/en/resources/resource-folder/toolsafe/toolsafe-tdj-hot-glue-gun">Glue Gun</a>, <a href="https://www.octe.ca/en/resources/resource-folder/toolsafe/toolsafe-tdj-modelling-tools">Modelling Tools</a>
							</h5>
						</article>

						<br />

					</section>
				</main>
			</Container>
		</div>
	);
}

export default Media;