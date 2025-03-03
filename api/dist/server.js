"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const default_1 = __importDefault(require("./routes/default"));
const PORT = Number(process.env.API_SERVER_PORT) || 3000;
const HOST = process.env.API_SERVER_HOST || "localhost";
const server = (0, express_1.default)();
server.use((0, express_1.default)());
server.use("/", default_1.default);
server.listen(PORT, HOST, () => console.log("Server is running"));
