import "dotenv/config";
import express from "express";
import defaultRoutes from "./routes/default";

const PORT = Number(process.env.API_SERVER_PORT)! || 3000;
const HOST = process.env.API_SERVER_HOST! || "0.0.0.0";

const server = express();

server.use(express());
server.use("/", defaultRoutes);

export const app = server.listen(PORT, HOST);