import "dotenv/config";
import express from "express";
import defaultRoutes from "./routes/default";
import messagesRouter from "./routes/messagesRouter";
import callRouter from "./routes/callRoutes";

const PORT = Number(process.env.API_SERVER_PORT)! || 3000;
const HOST = process.env.API_SERVER_HOST! || "0.0.0.0";

const server = express();

server.use(express.json());

server.use("/", defaultRoutes);
server.use("/messages", messagesRouter);
server.use("/call", callRouter);

server.listen(PORT, HOST);