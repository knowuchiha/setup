import { SET_SYMBOL }             from '../types';
import { SET_DATA }               from '../types';
import { SET_EXCHANGE }           from '../types';

const initialState = {
	symbol     : '',
	data       : [],
	exchange   : []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_SYMBOL: 
			return { ...state, symbol : action.data };

		case SET_DATA: 
			return { ...state, data : action.data };

		case SET_EXCHANGE: 
			return { ...state, exchange : action.data };

		default:
			return state;
	}
}

export default reducer;
