import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
console.log(store.getState()) 
export default store
