import {
  CHANGE_MENU,
  GET_MENSAJES,
  GET_USERS,
  LOAD_MENSAJES,
  RESET_CHATSTATE,
  SELECT_CHAT,
} from "../../types";

const ChatReducer = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        usuarios: action.payload,
      };
    case SELECT_CHAT:
      if (state.chatActivo === action.payload) return state;
      return {
        ...state,
        chatActivo: action.payload,
        mensajes: [],
      };
    case GET_MENSAJES:
      if (
        state.chatActivo === action.payload.from ||
        state.chatActivo === action.payload.to
      ) {
        return {
          ...state,
          mensajes: [...state.mensajes, action.payload],
        };
      } else {
        return state;
      }
    case LOAD_MENSAJES:
      return {
        ...state,
        mensajes: [...action.payload],
      };
    case RESET_CHATSTATE:
      return {
        chatActivo: null,
        usuarios: [],
        mensajes: [],
        menu: false,
      };
    case CHANGE_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};

export default ChatReducer;
