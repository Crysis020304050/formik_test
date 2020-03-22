import {ACTION_TYPES} from "../actions";

const initialState = {
  isFetching: false,
  user: null,
  error: null,
};

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTION_TYPES.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user,
      };
    case ACTION_TYPES.LOGIN_USER_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case ACTION_TYPES.USER_LOGOUT_REQUEST:
      return state = {};
    default:
      return state;
  }
}