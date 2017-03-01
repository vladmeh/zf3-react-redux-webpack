import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import App from './components/App';
import {createStore} from 'redux';

const app = (state = {isReady: false, text: ''}, action) => {
	switch (action.type) {
		case 'FETCH_GREETING':
			return Object.assign({}, state, {isReady: true, text: action.text});
	}
	return state;
};

const store = createStore(app);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,

	document.getElementById("root")
);