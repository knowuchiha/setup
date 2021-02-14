import { combineReducers }    from  'redux';
import increment              from  './increment.js';

const reducer = combineReducers(
	{
		increment: increment,
	}
)

export default reducer;
