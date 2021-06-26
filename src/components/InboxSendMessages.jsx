import React, { useContext, useState } from "react";
import AuthContext from "../auth/AuthContext";
import ChatContext from "../context/chat/ChatContext";
import SocketContext from "../context/SocketContext";
const InboxSendMessages = () => {
  const { socket } = useContext(SocketContext);
  const { uid } = useContext(AuthContext);
  const { chatActivo } = useContext(ChatContext);
  const [menssage, setMensssage] = useState("");
  const handleOnChange = ({ target }) => {
    const { value } = target;
    setMensssage(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (menssage.trim().length === 0) {
      return;
    }
    setMensssage("");

    socket.emit("mensaje-personal", {
      from: uid,
      to: chatActivo,
      mensaje: menssage,
    });
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="type_msg">
        <div className="input_msg_write">
          <input
            type="text"
            className="write_msg"
            placeholder="Mensaje..."
            value={menssage}
            onChange={handleOnChange}
          />
        </div>
        <div className="wrapperButtonSend">
          <button className="actionButton" type="submit">
            enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default InboxSendMessages;
