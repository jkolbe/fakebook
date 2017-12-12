import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Nav from '../containers/navigation/navigation';
import Profile from '../containers/profile/profile';

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="" component={Nav}>
			<Route path="/" component={Profile}/>
		</Route>
	</Router>
);
export default Routes;