import { ADD_MESSAGE } from '../actions/messages';

export default function (initialState) {
  return (state = initialState, action) => {
    let messages;

    switch (action.type) {
      case ADD_MESSAGE: {
        const text = state.currentMessage.trim();

        if (text) {
          messages = state.messages.map(message => Object.assign({}, message));
          messages.push({ text });

          return {
            messages,
            currentMessage: '',
          };
        }
        break;
      }
      default: {
        return state;
      }
    }
  };
}
