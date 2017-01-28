import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';

import Routes from './routes/routes'

injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider>	
  		<Routes />
  	</MuiThemeProvider>,
  	document.getElementById('root')
);
