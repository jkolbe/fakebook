import React, {Component} from 'react';
import $ from 'jquery';

import ProfileList from '../../components/profile/profile-list';

export default class Profile extends Component {
	
	URL_BASE = 'http://uinames.com/api/';

	constructor() {
		super();
		
		this.state = {
			profiles : [],
			maxPages : 4
		};
	}

	getProfiles() {
		$.get(`${this.URL_BASE}?ext&amount=10&region=canada`).then(
			(res) => { this.setState({
				profiles : [...this.state.profiles, ...res]
			})}
		);
	}

	componentDidMount() {
		this.getProfiles();
	}

	render(){
		return (
			<div className="container">
				PROFILE
				<ProfileList />
				{console.log(this.state.profiles)}
			</div>

		);
	}
}