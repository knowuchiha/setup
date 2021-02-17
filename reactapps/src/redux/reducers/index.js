import { combineReducers } from 'redux';

import Filter           from './filter';

const rootReducer = combineReducers ({
	filter       : Filter,
});

export default rootReducer;
