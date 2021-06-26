import React, { useContext } from "react";
import Header from "../components/Header";
import InboxPeople from "../components/InboxPeople";
import Messages from "../components/Messages";
import SelectChat from "../components/SelectChat";
import ChatContext from "../context/chat/ChatContext";
import "./../css/ChatsStyle.scss";
const ChatPage = () => {
  const { chatActivo, menu } = useContext(ChatContext);
  return (
    <div className="wrapperChatPage">
      <div className="wrapperMobileHeader">
        <Header />
      </div>
      <div className="wrapperUsers">
        <InboxPeople />
      </div>
      {menu ? (
        <div className="wrapperUsersMobile">
          <InboxPeople />
        </div>
      ) : null}

      {chatActivo ? (
        <div className="wrapperChat">
          <Messages />
        </div>
      ) : (
        <div className="wrapperChat">
          <SelectChat />
        </div>
      )}
    </div>
  );
};

export default ChatPage;
