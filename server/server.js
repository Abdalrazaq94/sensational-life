import http from "node:http";
import app from "./app.js";
import { connectDb, disconnectDb } from "./db.js";

const port = process.env.PORT || 3100;
const server = http.createServer(app);

server.on("listening", () => {
  console.log(`listening on port ${port}`);
});

process.on("SIGTERM", () => server.close(() => disconnectDb()));

// Start server immediately, attempt DB connection in background
server.listen(port);

// Try to connect to database, but don't block server startup
connectDb().catch((err) => {
  console.error("Failed to connect to database on startup:", err.message);
  console.log("Server is running but database is unavailable");
});

