import React, {Component} from 'react';
import {Container} from 'react-bootstrap'; 
import {Helmet} from 'react-helmet';
import {goToTop} from 'react-scrollable-anchor';

import './Movies.css';
import MovieList from '../data/movieList.json';

export default class Movies extends Component {
	constructor() {
		super();
		this.state = {
			myData: JSON.parse(JSON.stringify(MovieList)),
			language: 'English and Hindi',
			name: '',
			year: ''
		}
	}
	
	handleLanguageChange = (e) => { 
		this.setState({language: e.target.value});
	}
	
	handleYearSearch = (e) => { 
		this.setState({year: e.target.value});
	}
	
	handleNameSearch = (e) => { 
		this.setState({name: e.target.value});
	}
	
	componentWillMount() {
        goToTop();
    }
	
    render() {
        return (
			<div className="background">
				<Helmet>
					<title>Movies - Rehan Hajee</title>
				</Helmet>
				<Container className="home">
					<main>
						{/*<h1 className="title">Movie List</h1>*/}
						<h1><u>Movie List</u></h1>
						
						<form>
							Select Language: &nbsp; 
							<select value={this.state.language} onChange={this.handleLanguageChange}>
								<option value="English and Hindi">English and Hindi</option>
								<option value="English">English</option>
								<option value="Hindi">Hindi</option>
							</select>
							<br />
							{/*<input type="text" id="mySearchInput" onKeyUp="filter('mySearchInput',0)" placeholder="Search for a movie name.." />*/}
							<input type="text" id="mySearchInput" placeholder="Search for a movie name.." />
							&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
							Enter a Year: &nbsp; 
							{/*<input type="text" id="myYearInput" onKeyUp="filter('myYearInput', 1)" />*/}
							<input type="text" id="myYearInput" />
							<br />
							
						</form>
						
						<div rt-repeat="x in this.state.myData">
							<span>hi</span>
						</div>
						
						<ul>
						  <rt-virtual rt-repeat="n in [1,2,3]">
							<li>{n}</li>
							<li>{n*2}</li>
						  </rt-virtual>
						</ul>
						
						
						<table id="myTable" >
							<thead>
								<tr>
									<th>Name</th>
									<th>Year</th>
									<th>Location</th>
								</tr>
							</thead>
							<tbody>
								{/*<tr rt-repeat="x in {this.state.myData} | orderBy:'Name'| orderBy:'-Year'" rt-if="language.indexOf(x.Language) != -1">*/}
								
								{/*<tr rt-repeat="x in {this.state.myData}">
									<td>{x.Name}</td>
									<td align="center">{x.Year}</td>
									<td>{x.Location}</td>
								</tr>*/}
							</tbody>
						</table>
					</main>
				</Container>
			</div>
        );
	}
}
