import {combineReducers} from 'redux';
import Bi from './rbasicinfo';
import notice from './notice';
import par from './messparcel';
import parcel from './parcel';
import forum from './forum';

export default combineReducers({
	parcel,notice,par,Bi,forum
})