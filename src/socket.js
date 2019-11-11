import io from "socket.io-client";
import store from "./store";
import { onlineUser, offlineUser, addUsers } from "./actions/user";
import { getMessages } from "./actions/message";

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
  });
};

export const disconnect = () => {
  socket.disconnect();
};

export default connectToSocket;
