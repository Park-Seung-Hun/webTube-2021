"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _videoController = require("../controller/videoController");

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiRouter = _express["default"].Router();

apiRouter.post(_routes["default"].registerView, _videoController.postRegisterView);
apiRouter.post(_routes["default"].addComment, _videoController.postAddComment);
var _default = apiRouter;
/*
server와 통신하기 위한 URL(유저는 접속이 불가능하다.)
*/

exports["default"] = _default;