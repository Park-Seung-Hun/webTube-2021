"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _videoController = require("../controller/videoController");

var _middlewares = require("../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var videoRouter = _express["default"].Router(); // video Upload


videoRouter.get(_routes["default"].uploadvideo, _middlewares.onlyPrivate, _videoController.getuploadVideo);
videoRouter.post(_routes["default"].uploadvideo, _middlewares.onlyPrivate, _middlewares.uploadVideo, _videoController.postuploadVideo); // video Delete

videoRouter.get(_routes["default"].deletevideo(), _middlewares.onlyPrivate, _videoController.deleteVideo); // video Edit

videoRouter.get(_routes["default"].editvideo(), _middlewares.onlyPrivate, _videoController.getEditVideo);
videoRouter.post(_routes["default"].editvideo(), _middlewares.onlyPrivate, _videoController.postEditVideo); // video Detail

videoRouter.get(_routes["default"].detailvideo(), _videoController.detailVideo);
var _default = videoRouter;
exports["default"] = _default;