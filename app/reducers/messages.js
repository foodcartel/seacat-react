import { List } from 'immutable';

let count = 1;
const initialState = {
  messages: List([{ id: 0, text: 'Hello Friend...' }]),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      const messageBody = {
        text: action.message,
        id: count,
      };
      count += 1;
      return {
        ...state,
        messages: state.messages.push(messageBody),
      };
    }
    default:
      return state;
  }
};

export default reducer;
