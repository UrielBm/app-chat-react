import React, { useContext } from "react";
import AuthContext from "../auth/AuthContext";
import ChatContext from "../context/chat/ChatContext";

const HeaderInbox = () => {
  const { userName, logout } = useContext(AuthContext);
  const { resetChatState } = useContext(ChatContext);
  const handleOnClose = () => {
    resetChatState();
    logout();
  };
  return (
    <header className="wrapperHeader">
      <div className="wrapperSubtitle">
        <h4 className="subtitle">Hi!, {userName}</h4>
      </div>
      <div className="wrapperActionButton" onClick={handleOnClose}>
        <button className="actionButton">Salir</button>
      </div>
    </header>
  );
};

export default HeaderInbox;
