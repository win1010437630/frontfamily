import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//import reducer from './reducer/'

//const store=createStore(reducer,applyMiddleware(thunk));
//<Provider store={store}><App /></Provider>
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
