import React, { useContext } from "react";
import ChatContext from "../context/chat/ChatContext";
import man from "./../assets/img/man.svg";
import woman from "./../assets/img/woman.svg";
const ChatBarItem = ({ data }) => {
  const { chatActivo, selectChat, loadMesajes } = useContext(ChatContext);
  const { online, userName, gender, uid } = data;
  const handleOnClick = () => {
    selectChat(uid);
    loadMesajes(uid);
  };
  return (
    <div
      className={`wrapperChatUser ${chatActivo === uid && "activo"}`}
      onClick={handleOnClick}
    >
      <div className="wrapperImg">
        <img
          src={gender === "male" ? man : woman}
          alt="userPicture"
          className="img"
        />
      </div>
      <div className="wrapperInfo">
        <p className="userName">{userName}</p>
        <p>
          {online ? (
            <span className="statusOnline">online</span>
          ) : (
            <span className="statusOffline">offline</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ChatBarItem;
