import io from "socket.io-client";
import store from "./store";
import {
  onlineUser,
  offlineUser,
  addUsers,
  changeChatroom
} from "./actions/user";
import { getMessages, addMessage } from "./actions/message";

import { store as notif } from "react-notifications-component";
const { addNotification } = notif;

export let socket;

const connectToSocket = token => {
  const { dispatch } = store;
  socket = io("http://localhost:5000/", {
    query: `token=${token}`
  });
  socket.on("ready", () => {
    socket.on("messages", msgs => {
      dispatch(getMessages(msgs));
    });

    socket.on("users", users => {
      dispatch(addUsers(users));
      dispatch(changeChatroom(users[0]));
    });

    socket.on("online user", user => {
      addNotification({
        title: `${user.username} is online!`,
        message: "Send him a message now!",
        type: "info",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeInRight"],
        animationOut: ["animated", "fadeOutDown"],
        dismiss: {
          duration: 4500
        }
      });
      dispatch(onlineUser(user));
    });

    socket.on("offline user", user => {
      addNotification({
        title: `${user.username} went offline!`,
        message: "Message him when he comes back",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeInRight"],
        animationOut: ["animated", "fadeOutDown"],
        dismiss: {
          duration: 4500
        }
      });

      dispatch(offlineUser(user));
    });
    socket.on("received message", msg => {
      console.log("received a message", msg);
      const { users, chatroomUser } = store.getState();
      let user;
      for (let i in users) {
        if (i === msg.from) {
          user = users[i];
        }
      }
      addNotification({
        title: `${user.username} sent you a message!`,
        message: msg.text.substr(0, 20),
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeInRight"],
        animationOut: ["animated", "fadeOutDown"],
        dismiss: {
          duration: 4500
        }
      });
      if (chatroomUser._id === user._id) {
        dispatch(addMessage({ ...msg, own: false }));
      }
    });
  });
};

export const disconnect = () => {
  socket.disconnect();
};

export default connectToSocket;
