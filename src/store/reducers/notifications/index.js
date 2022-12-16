const initialState = {
  hasNotification: false,
  message: null,
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAN_NOTIFICATION':
      return {
        ...state,
        notification: null,
        hasNotification: false,
      };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        hasNotification: true,
        message: action.data,
      };
    default:
      return state;
  }
};

export default notificationsReducer;
