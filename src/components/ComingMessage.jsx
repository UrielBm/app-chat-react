import React from "react";
import man from "../assets/img/man.svg";
import woman from "../assets/img/woman.svg";
import GetDate from "../helpers/GetDate";
const ComingMessage = ({ data }) => {
  //"MM/dd/yyyy"
  const { avatar, mensaje, createdAt } = data;
  return (
    <div className="incoming_msg">
      <div className="wrapperImg">
        <img
          src={avatar === "male" ? man : woman}
          alt="pictureChat"
          className="img"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{mensaje}</p>
          <span className="time_date">{GetDate(createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default ComingMessage;
