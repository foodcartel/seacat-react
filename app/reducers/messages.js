import { List } from 'immutable';

const initialState = {
  messages: List(['Hello Friend...']),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: state.messages.push(action.message),
      };
    default:
      return state;
  }
};

export default reducer;
