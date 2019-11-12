import React, { useState, useRef } from "react";

import { connect } from "react-redux";
import { addMessage } from "../../actions/message";
import { socket } from "../../socket";

const MessageSend = ({ addMessage, from, to }) => {
  const [msg, setMsg] = useState("");
  const input = useRef();
  const form = useRef();

  const handleChange = e => setMsg(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (msg) {
      socket.emit(
        "send message",
        {
          text: msg,
          from,
          to
        },
        (err, msg) => {
          if (err) {
            return console.log(err);
          }
          addMessage({ ...msg, own: true, createdAt: Date.now() });
          form.current.reset();
          input.current.focus();
        }
      );
    }
  };
  return (
    <div className="chatroom-form-container">
      <form
        className="chatroom-form"
        autoComplete="off"
        onChange={handleChange}
        onSubmit={handleSubmit}
        ref={form}
      >
        <input
          type="text"
          name="text"
          id="text"
          ref={input}
          placeholder="Type a message..."
          className="chatroom-form__input"
        />
        <button type="submit" className="btn-send">
          send
        </button>
      </form>
    </div>
  );
};

export default connect(
  ({ chatroomUser: { _id: to }, user: { _id: from } }) => ({ from, to }),
  { addMessage }
)(MessageSend);
