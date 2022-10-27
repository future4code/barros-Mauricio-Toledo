"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
//Exercicio 1
app.get("/ping", function (req, res) {
    res.status(201).send("Pong");
});
