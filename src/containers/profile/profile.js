import React, {Component} from 'react';
import $ from 'jquery';

import ProfileList from '../../components/profile/profile-list';

export default class Profile extends Component {
	
	URL_BASE = 'http://uinames.com/api/';

	constructor(props) {
		super();
		
		this.state = {
			profiles : [],
			favoriteProfiles: [],
			maxPages : 4,
			favorites: [1,3,6],
			isFavoritesScreen: props.location.query.favorites
		};

		console.log(this.state.isFavoritesScreen);

		

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

	getFavoritesProfiles(){
		const favprofiles = this.state.profiles.filter((p,index)=>this.state.favorites.indexOf(index) > -1);
		console.log(favprofiles);
		
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

	componentDidMount() {
		this.getProfiles();
		if(this.state.isFavoritesScreen){
			this.getFavoritesProfiles();
		}
	}

	render(){
		return (
			<div className="container">

				<ProfileList 
					profiles={this.state.isFavoritesScreen ? this.state.profiles : this.state.profiles} 
					removeFromFavorites={this.removeFromFavorites} 
					addToFavorites={this.addToFavorites} />

			</div>
		);
	}
}