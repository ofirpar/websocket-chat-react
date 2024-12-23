import express from "express";
import { router as chatRoutes } from "./routes/chat-route.js";

const app = express();

app.use("/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello Node express</h1>");
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("### Running on port" + port);
});

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/html" });

//   res.write("<h1>Hello Node</h1>");
//   res.end();
// });

// const port = 3000;

// server.listen(port, () => {
//   console.log("### Running on port" + port);
// });
