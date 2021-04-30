"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _userController = require("../controller/userController");

var _middlewares = require("../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();
/* 프로필 변경 */


userRouter.get(_routes["default"].editprofile, _middlewares.onlyPrivate, _userController.getEditProfile);
userRouter.post(_routes["default"].editprofile, _middlewares.onlyPrivate, _middlewares.uploadAvatar, _userController.postEditProfile);
/* 비밀번호 변경 */

userRouter.get(_routes["default"].changepassword, _middlewares.onlyPrivate, _userController.getChangePassword);
userRouter.post(_routes["default"].changepassword, _middlewares.onlyPrivate, _userController.postChangePassword);
/* 유저 프로필 */

userRouter.get(_routes["default"].userdetail(), _userController.userDetail);
var _default = userRouter;
exports["default"] = _default;