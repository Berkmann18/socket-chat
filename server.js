const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  //eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});

const io = require("socket.io")(server);

io.on("connection", socket => {
  // console.log('sid=', socket.id);

  socket.on("SEND_MESSAGE", data => {
    io.emit("MESSAGE", data);
  });
});
