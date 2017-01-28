import React, {Component} from 'react';
import $ from 'jquery';

import ProfileList from '../../components/profile/profile-list';

export default class Profile extends Component {
	
	URL_BASE = 'http://uinames.com/api/';

	constructor() {
		super();
		
		this.state = {
			profiles : [],
			maxPages : 4,
			favorites: [1,3,6]
		};

		this.addToFavorites = this.addToFavorites.bind(this);
		this.removeFromFavorites = this.removeFromFavorites.bind(this);
	}

	getProfiles() {
		$.get(`${this.URL_BASE}?ext&amount=10&region=canada`).then(
			(res) => { this.setState({
				profiles : [...this.state.profiles, ...res]
			})}
		);
	}

	addToFavorites(profile){
		if(this.state.favorites.indexOf(profile) === -1) {
			this.setState({
				favorites : [...this.state.favorites, profile]
			});
		}
	}

	removeFromFavorites(profile){
		const favorites = this.state.favorites.filter(item => item !== profile);
		this.setState({
			favorites : favorites
		});
	}

	componentDidMount() {
		this.getProfiles();
	}

	render(){
		return (
			<div className="container">
				<ProfileList profiles={this.state.profiles} favorites={this.state.favorites} removeFromFavorites={this.removeFromFavorites} addToFavorites={this.addToFavorites}/>
			</div>
		);
	}
}