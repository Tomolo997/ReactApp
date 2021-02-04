import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USER,
  GET_REPOS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
      break;
    case CLEAR_USER:
      return {
        ...state,
        users: [],
        loading: false,
      };
      break;
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
      break;
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
      break;

    default:
      return;
  }
};
