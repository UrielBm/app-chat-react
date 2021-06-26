import {
  DO_LOGIN,
  DO_LOGOUT,
  DO_REGISTER,
  RENEW_TOKEN,
  WRONG_TOKEN,
} from "./../types";
const AuthReducer = (state, action) => {
  switch (action.type) {
    case DO_LOGIN:
    case DO_REGISTER:
    case RENEW_TOKEN:
      return {
        ...state,
        uid: action.payload.uid,
        checking: false,
        logged: true,
        userName: action.payload.userName,
        email: action.payload.email,
      };
    case WRONG_TOKEN:
    case DO_LOGOUT:
      return {
        uid: null,
        checking: true,
        logged: false,
        userName: null,
        email: null,
      };
    default:
      return state;
  }
};
export default AuthReducer;
