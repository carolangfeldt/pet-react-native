export const CLEAN_NOTIFICATION = 'CLEAN_NOTIFICATION';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

export const addMessage = (notification) => ({
  type: ADD_NOTIFICATION,
  message: notification,
});

export const cleanNotification = () => ({
  type: CLEAN_NOTIFICATION,
});
