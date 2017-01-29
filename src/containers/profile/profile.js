import React, {Component} from 'react';
import $ from 'jquery';

import ProfileList from '../../components/profile/profile-list';
import TextField from 'material-ui/TextField';

export default class Profile extends Component {
	
	URL_BASE = 'http://uinames.com/api/';

	constructor() {
		super();
		
		this.state = {
			profiles : [],
			maxPages : 4,
			searchString : "",
			searchResults: []
		};		

		this.addToFavorites = this.addToFavorites.bind(this);
		this.removeFromFavorites = this.removeFromFavorites.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	getProfiles() {
		$.get(`${this.URL_BASE}?ext&amount=10&region=canada`).then(
			(res) => { this.setState({
				profiles : [...this.state.profiles, ...res]
			})}
		);
	}

	addToFavorites(profileIndex){
		const profiles = this.state.profiles,
			  profile = profiles[profileIndex];
		
		profile.isFavorite = true;
		profiles[profileIndex] = profile;

		this.setState({
			profiles : profiles
		});
	}

	removeFromFavorites(profileIndex){
		const profiles = this.state.profiles,
			  profile = profiles[profileIndex];
		
		profile.isFavorite = false;
		profiles[profileIndex] = profile;

		this.setState({
			profiles : profiles
		});
	}

	handleChange(event) {
    	const value = event.target.value;
    	this.setState({
    		searchString: value,
    		searchResults: this.state.profiles.filter(p => (`${p.name} ${p.surname}`).toLowerCase().includes(value))
    	})
  	}

	componentDidMount() {
		this.getProfiles();
	}

	render(){		
		return (
			<div className="container">

				<TextField
					hintText="Enter name or surname"
					floatingLabelText="Search"
					onChange={this.handleChange}
				/>

				<ProfileList 
					profiles={this.state.searchString ? this.state.searchResults : this.state.profiles} 
					removeFromFavorites={this.removeFromFavorites} 
					addToFavorites={this.addToFavorites} />
			</div>
		);
	}
}