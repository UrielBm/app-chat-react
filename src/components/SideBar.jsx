import React, { useContext } from "react";
import AuthContext from "../auth/AuthContext";
import ChatContext from "../context/chat/ChatContext";
import ChatBarItem from "./ChatBarItem";
const SideBar = () => {
  const { usuarios } = useContext(ChatContext);
  const { uid } = useContext(AuthContext);
  return (
    <div className="wrapperListChats">
      {usuarios.length > 0 ? (
        usuarios
          .filter((user) => user.uid !== uid)
          .map((user) => <ChatBarItem key={user.uid} data={user} />)
      ) : (
        <p className="text">no hay chats disponibles</p>
      )}
    </div>
  );
};

export default SideBar;
