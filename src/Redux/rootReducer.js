import { combineReducers } from 'redux';
//import feature reducer
import { reducer as cartReducer } from './Datapassing'


const rootReducer = combineReducers({
	//add feature reducer
	Datapassing: cartReducer,
	
})

export { rootReducer }