import React from "react";

import { formatDistanceToNow } from "date-fns";

const Message = ({ message: { text, createdAt, own } }) => {
  let time = "";
  try {
    time = formatDistanceToNow(createdAt, { addSuffix: true });
  } catch (e) {
    console.log(e);
  }
  return (
    <div className={`message ${own ? "message-own" : ""}`}>
      <p className="message__text">{text}</p>
      <p className="message__date">{time}</p>
    </div>
  );
};

export default Message;
