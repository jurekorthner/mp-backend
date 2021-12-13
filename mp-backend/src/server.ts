import * as express from "express";
import * as socketio from "socket.io";
import * as path from "path";

const app: express.Express = express();
app.set("port", process.env.PORT || 3000);

let http: any = require("http").Server(app);

let io = require("socket.io")(http);

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve("./client/index.html"));
});

io.on("connection", function(socket: any) {
  console.log("a user connected");
  socket.on("message", (data: any) => {
    console.log(data);
  })
});

const server = http.listen(3000, function() {
  console.log("listening on *:3000");
});