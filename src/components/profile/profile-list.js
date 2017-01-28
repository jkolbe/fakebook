import React from 'react';

import ProfileCard from './profile-card';

const ProfileList = (props) => (
	<div>
		<h1>ProfileList</h1>
		{console.log(props.profiles)}
		{props.profiles.map((p, index) => <ProfileCard 
			key={`profile-${index}`} 
			name={`${p.name} ${p.surname}`} 
			photo={p.photo}
			birthday={p.birthday.dmy}
			age={p.age}
			gender={p.gender}
		/>)}
	</div>
);
export default ProfileList;