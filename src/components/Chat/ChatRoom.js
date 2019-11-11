import React, { useEffect } from "react";

import { connect } from "react-redux";

import MessageSend from "./MessageSend";
import Message from "./Message";

import { animateScroll } from "react-scroll";

const ChatRoom = ({ chatroomUser: { avatar, username, online }, messages }) => {
  useEffect(() => {
    animateScroll.scrollToBottom({
      containerId: "messages"
    });
  });

  return (
    <div className="chatroom">
      <div className="chatroom__user">
        <h3 className="chatroom__user__username">{username}</h3>
        <p
          className={`chatroom__user__status chatroom__user__status-${
            online ? "online" : "offline"
          }`}
        >
          {online ? "online" : "offline"}
        </p>
      </div>
      <div className="messages" id="messages">
        {messages.map(msg => (
          <Message message={msg} key={msg._id || msg.createdAt} />
        ))}
      </div>
      <MessageSend />
    </div>
  );
};

export default connect(({ chatroomUser, messages }) => ({
  chatroomUser,
  messages
}))(ChatRoom);
