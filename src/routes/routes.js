import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Nav from '../containers/navigation/navigation';
import Home from '../containers/home/home';

const Routes = () => (
	<Router history={browserHistory}>
		<Route path="" component={Nav}>
			<Route path="/" component={Home}/>
		</Route>
	</Router>
);
export default Routes;