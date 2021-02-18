import React                from 'react';
import ReactDOM             from 'react-dom';
import { Provider }         from 'react-redux';

import { StylesProvider }   from '@material-ui/core/styles';

import configureStore       from './redux/store'; 
import App                  from './App.js';


const store   = configureStore();

ReactDOM.render(
	<Provider store = { store }>
		<StylesProvider injectFirst>
			<App />
		</StylesProvider>
	</Provider>
	,document.getElementById('root')
);

