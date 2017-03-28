export const ADD_MESSAGE = 'add-message';

export function addMessage(message) {
  return { type: ADD_MESSAGE, message };
}
