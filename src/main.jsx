import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './css/global';
import App from './components/App/App';
import reducers from './store/reducers';

// create redux store from the reducer
let store = createStore(reducers);

// wrap the top level component inside the react-redux Provider
let rootElement = document.querySelector('.root');
render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);

// Development hot reloading
if (module.hot) {
	module.hot.accept();
}
