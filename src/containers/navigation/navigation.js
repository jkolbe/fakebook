import React, {Component} from 'react';
import { Link } from 'react-router';

// Material-UI
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// Icons
import ActionHome from 'material-ui/svg-icons/action/home';
import IconFace from 'material-ui/svg-icons/action/face';


export default class Navigation extends Component {

	constructor() {
		super();
		this.state = {
			open: false
		};	
	}

	handleToggle = () => this.setState({open: !this.state.open});
	handleClose = () => this.setState({open: false});

	render(){
		return (
			<div>
				<AppBar
					title="Title"
					onLeftIconButtonTouchTap={this.handleToggle}
				/>
				<Drawer
					docked={false}
					width={300}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}
					>

					<MenuItem
						containerElement={<Link to="/" />}
						onTouchTap={this.handleClose}
						primaryText="Home"
						leftIcon={<ActionHome />}
					/>
					<MenuItem
						containerElement={<Link to="/profile" />}
						onTouchTap={this.handleClose}
						primaryText="Profiles"
						leftIcon={<IconFace />}
					/>
				</Drawer>
				
				{this.props.children}
			</div>
		);
	}
}