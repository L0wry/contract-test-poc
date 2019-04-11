"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
const users = new Array(10).fill().map((_, i) => ({
  name: `user-${i}`,
  password1: `pass-${i}`,
  age: i
}));
app.get('/users', (_, res) => res.send(users));
var _default = app;
exports.default = _default;