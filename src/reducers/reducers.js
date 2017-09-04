import {combineReducers} from 'redux';
import Bi from './rbasicinfo';
import notice from './notice';
import par from './messparcel';
import parcel from './parcel';
import infrom from './infrom';
export default combineReducers({
	parcel,notice,par,Bi,infrom
})