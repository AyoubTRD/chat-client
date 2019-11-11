import React, { useEffect } from "react";

import { connect } from "react-redux";

import MessageSend from "./MessageSend";

const ChatRoom = ({ chatroomUser }) => {
  return (
    <div>
      <MessageSend />
    </div>
  );
};

export default connect(({ chatroomUser, messages }) => ({
  chatroomUser,
  messages
}))(ChatRoom);
