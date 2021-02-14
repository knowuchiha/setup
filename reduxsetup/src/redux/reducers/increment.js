import { ADD_NUMBERS }   from '../types';

const initialState = {
	count : 0,
}

const  increment = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBERS:
      return { ...state, count : action.data } 
    default:
      return state
  }
}

export default increment;
