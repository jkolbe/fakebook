import React from 'react';

import Profile from './profile';

const ProfileList = (props) => (
	<div>
		<h1>ProfileList</h1>
		{console.log(props.profiles)}
		<Profile />
	</div>
);
export default ProfileList;