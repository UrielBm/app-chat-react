import React from "react";

import GetDate from "../helpers/GetDate";
const OutMessage = ({ data }) => {
  const { mensaje, createdAt } = data;

  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{mensaje}</p>
        <span className="time_date">{GetDate(createdAt)}</span>
      </div>
    </div>
  );
};

export default OutMessage;
