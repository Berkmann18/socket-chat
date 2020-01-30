/* eslint-disable no-console */
const app = require("express")();
const Server = require("serverbuilder");
const PORT = process.env.PORT || 3001;

const server = new Server(app, PORT, {
  name: "Chat Server"
});
server.run().catch(console.error);

const io = require("socket.io")(server.server);

io.on("connection", socket => {
  // console.log('sid=', socket.id);

  socket.on("SEND_MESSAGE", data => {
    io.emit("MESSAGE", data);
  });
});
