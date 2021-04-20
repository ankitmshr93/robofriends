import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';
import App from './App';
import { searchRobots,requestRobots } from './reducers';
import serviceworker from '../node_modules/caniuse-lite/data/features/serviceworkers';

const logger = createLogger();
const rootReducer=combineReducers({searchRobots,requestRobots})
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))
ReactDOM.render(
	<Provider store={store}>
		<App />	
	</Provider>
	, document.getElementById('root'));
serviceworker.register();
reportWebVitals();
