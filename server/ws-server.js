import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: process.env.PORT || 3001 });

wss.on("connection", (ws) => {
  console.log("Connection established", { ws });
  ws.on("message", (data) => {
    console.log("message received", { data: data.toString() });
    ws.send(`Got you! ${data.toString()}`);
  });
  ws.send("Hi");
});
