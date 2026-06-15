import http from "node:http";
import app from "./app.js";
import { connectDb, disconnectDb } from "./db.js";

const port = process.env.PORT || 3100;
const server = http.createServer(app);

server.on("listening", () => {
  console.log(`listening on port ${port}`);
});

process.on("SIGTERM", () => server.close(() => disconnectDb()));

connectDb().then(() => server.listen(port));