import React, { useContext } from "react";
import ComingMessage from "./ComingMessage";
import OutMessage from "./OutMessage";
import InboxSendMessages from "./InboxSendMessages";
import ChatContext from "../context/chat/ChatContext";
import AuthContext from "../auth/AuthContext";
const Messages = () => {
  const { mensajes } = useContext(ChatContext);
  const { uid } = useContext(AuthContext);
  return (
    <div className="mesgs">
      <div id="history" className="msg_history">
        {mensajes.length > 0 ? (
          mensajes.map((msg) =>
            msg.to === uid ? (
              <ComingMessage key={msg._id} data={msg} />
            ) : (
              <OutMessage key={msg._id} data={msg} />
            )
          )
        ) : (
          <p className="noChat">aun no hay una conversión</p>
        )}
      </div>
      <InboxSendMessages />
    </div>
  );
};

export default Messages;
