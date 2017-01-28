import React from 'react';

import ProfileCard from './profile-card';

const ProfileList = (props) => (
	<div>
		<h1>Profile List:</h1>
		{props.profiles.map((p, index) => <ProfileCard 
			key={`profile-${index}`} 
			index={index}
			name={`${p.name} ${p.surname}`} 
			photo={p.photo}
			age={p.age}
			gender={p.gender}
			favorites={props.favorites}
			addToFavorites={props.addToFavorites}
			removeFromFavorites={props.removeFromFavorites}
		/>)}
	</div>
);
export default ProfileList;