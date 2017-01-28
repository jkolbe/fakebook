import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const ProfileCard = ({
	name, 
	photo,
	birthday,
	age,
	gender
}) => (
	<div>
		<Card>
			<CardHeader
				title={name}
				subtitle={birthday}
				avatar={photo}
			/>
		</Card>
		
	</div>
);

export default ProfileCard;