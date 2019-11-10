import io from "socket.io-client";

export let socket;

const connectToSocket = token => {
  socket = io("http://localhost:5000/", {
    query: `token=${token}`
  });
  socket.on("ready", () => {
    console.log("the connection has been made successfully");
  });
};

export const disconnect = () => {
  socket.disconnect();
};

export default connectToSocket;
