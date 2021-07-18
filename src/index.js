import React from 'react';
import ReactDOM from 'react-dom';
//import store from './store'
//import {Provider} from 'react-redux';
import App from './Components/App/App';
import {ContextApp, initialState} from "./reducer"
 

ReactDOM.render(
  <ContextApp.Provider value={{initialState}}>
    <App/>
  </ContextApp.Provider>,
document.getElementById('root')
);