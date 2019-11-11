import React from "react";

const MessageSend = () => {
  return (
    <form className="chatroom-form">
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Send a message from here"
      />
      <button type="submit" className="btn-send">
        send
      </button>
    </form>
  );
};

export default MessageSend;
