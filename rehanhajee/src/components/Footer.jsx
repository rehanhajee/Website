import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer className="bg-dark centre">© {this.getYear()}, Rehan Hajee</footer>
		);
	}
	
	getYear() {
		return new Date().getFullYear();
	}
}

export default Footer;
