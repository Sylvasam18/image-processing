"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizer_1 = __importDefault(require("../../resizer"));
var sharp = require('sharp');
var http = require('http');
var fs = require('fs');
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    var name = req.query.name;
    var height = parseInt(req.query.height);
    var width = parseInt(req.query.width);
    (0, resizer_1.default)(name, width, height);
    fs.readFile("src\\assets\\thumbs\\".concat(name, ".png"), function (err, data) {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.write(data);
        return res.end();
    });
});
exports.default = routes;
