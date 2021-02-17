import { SET_SYMBOL }      from '../types';
import { SET_DATA }        from '../types';
import { SET_EXCHANGE }    from '../types';

export const setSymbol = (data) => {
	return {
		type : SET_SYMBOL,
		data
	}
};

export const setData = (data) => {
	return {
		type : SET_DATA,
		data
	}
};

export const setExchange = (data) => {
	return {
		type : SET_EXCHANGE,
		data
	}
};

