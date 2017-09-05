import {combineReducers} from 'redux';
import Bi from './rbasicinfo';
import notice from './notice';
import par from './messparcel';
import parcel from './parcel';
import service from './service';
export default combineReducers({
	parcel,notice,par,Bi,service
})