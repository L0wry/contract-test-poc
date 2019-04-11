"use strict";

var _service = _interopRequireDefault(require("./service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = 3000;

_service.default.listen(port, () => console.log(`Listening on port ${port}...`));