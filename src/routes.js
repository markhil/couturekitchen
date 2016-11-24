import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={App} />
	</Route>
);