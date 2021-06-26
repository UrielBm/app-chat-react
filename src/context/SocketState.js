import React, { useContext, useEffect } from "react";
import { ScrollToBottomAnimated } from "../helpers/ScrollMessages";
import AuthContext from "../auth/AuthContext";
import useSocket from "../hooks/useSocket";
import ChatContext from "./chat/ChatContext";
import SocketContext from "./SocketContext";

const SocketState = (props) => {
  const { getUsers, getMensajes } = useContext(ChatContext);
  const { logged } = useContext(AuthContext);
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    "https://api-chatsocket.herokuapp.com"
  );
  useEffect(() => {
    if (logged) {
      connectSocket();
    }
  }, [logged, connectSocket]);
  useEffect(() => {
    if (!logged) {
      disconnectSocket();
    }
  }, [logged, disconnectSocket]);
  useEffect(() => {
    socket?.on("user-list", (usuarios) => {
      getUsers(usuarios);
    });
  }, [socket, getUsers]);
  useEffect(() => {
    socket?.on("mensaje-personal", (mensaje) => {
      getMensajes(mensaje);
      ScrollToBottomAnimated("history");
    });
  }, [socket, getMensajes]);
  return (
    <SocketContext.Provider value={{ socket, online }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export default SocketState;
