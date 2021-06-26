import React, { useCallback, useReducer } from "react";
import ClientAxios from "../../helpers/ClienteAxios";
import ChatContext from "./ChatContext";
import ChatReducer from "./ChatReducer";
import { ScrollToBottom } from "../../helpers/ScrollMessages";
import {
  CHANGE_MENU,
  GET_MENSAJES,
  GET_USERS,
  LOAD_MENSAJES,
  RESET_CHATSTATE,
  SELECT_CHAT,
} from "../../types";
const ChatState = (props) => {
  const initialState = {
    chatActivo: null,
    usuarios: [],
    mensajes: [],
    menu: false,
  };
  const [state, dispatch] = useReducer(ChatReducer, initialState);
  const getUsers = useCallback((list) => {
    dispatch({
      type: GET_USERS,
      payload: list,
    });
  }, []);
  const selectChat = (uid) => {
    dispatch({
      type: SELECT_CHAT,
      payload: uid,
    });
  };
  const getMensajes = useCallback((mensajes) => {
    dispatch({
      type: GET_MENSAJES,
      payload: mensajes,
    });
  }, []);
  const loadMesajes = async (uid) => {
    try {
      const token = localStorage.getItem("token");
      const response = await ClientAxios.get(`/mensajes/${uid}`, {
        headers: { "x-token": token },
      });
      const { mensajes } = response.data;
      dispatch({
        type: LOAD_MENSAJES,
        payload: mensajes,
      });
      ScrollToBottom("history");
    } catch (error) {
      console.log(error.response);
    }
  };
  const resetChatState = () => {
    dispatch({
      type: RESET_CHATSTATE,
    });
  };
  const handleOpenMenu = useCallback((open) => {
    dispatch({
      type: CHANGE_MENU,
      payload: open,
    });
  }, []);
  return (
    <ChatContext.Provider
      value={{
        uid: state.uid,
        chatActivo: state.chatActivo,
        usuarios: state.usuarios,
        mensajes: state.mensajes,
        menu: state.menu,
        getUsers,
        selectChat,
        getMensajes,
        loadMesajes,
        resetChatState,
        handleOpenMenu,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatState;
