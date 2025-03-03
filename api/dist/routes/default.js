"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const defaultRoutes = (0, express_1.Router)();
defaultRoutes.get("/", (req, res) => {
    res.status(200).send({ data: "Wellcome to API connect" });
});
exports.default = defaultRoutes;
