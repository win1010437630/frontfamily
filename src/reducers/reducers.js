import {combineReducers} from 'redux';
import Bi from './rbasicinfo';
import notice from './notice';
import par from './messparcel';
import parcel from './parcel';
import service from './service';
import forum from './forum';
import share from './share';
import review from './review'
import infrom from './infrom';
export default combineReducers({
	parcel,notice,par,Bi,service,forum,share,review,infrom

})