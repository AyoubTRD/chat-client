import React from "react";

import { formatDistanceToNow } from "date-fns";

const Message = ({ message: { text, createdAt, own } }) => {
  return (
    <div className={`message ${own ? "message-own" : ""}`}>
      <p className="message__text">{text}</p>
      <p className="message__date">
        {formatDistanceToNow(createdAt, { addSuffix: true })}
      </p>
    </div>
  );
};

export default Message;
