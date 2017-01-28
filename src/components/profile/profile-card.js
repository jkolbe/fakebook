import React from 'react';

import {Card, CardHeader} from 'material-ui/Card';
import IconFavoriteFalse from 'material-ui/svg-icons/action/favorite-border';
import IconFavoriteTrue from 'material-ui/svg-icons/action/favorite';

const ProfileCard = ({
	index,
	name, 
	photo,
	age,
	gender,
	favorites,
	addToFavorites,
	removeFromFavorites,
}) => (
	<div>
		<Card className="profile-card">
			<CardHeader
				className="profile-card-header"
				title={name}
				subtitle={`Age: ${age}  |  Gender: ${gender}`}
				avatar={photo} >
				<IconFavoriteFalse 
						className="profile-card-icon"
						onClick={()=>addToFavorites(index)} />
				{
				favorites.indexOf(index) > -1 ?
				<IconFavoriteTrue 
					className="profile-card-icon"
					onClick={()=>removeFromFavorites(index)} /> :
				<IconFavoriteFalse 
					className="profile-card-icon"
					onClick={()=>addToFavorites(index)} />
				}
			</CardHeader>
		</Card>
	</div>
);

export default ProfileCard;