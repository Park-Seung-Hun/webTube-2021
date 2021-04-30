"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _userController = require("../controller/userController");

var _videoController = require("../controller/videoController");

var _middlewares = require("../middlewares");

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* url 저장 routes */

/* Controller*/
var globalRouter = _express["default"].Router();
/*video controller*/


globalRouter.get(_routes["default"].home, _videoController.home);
globalRouter.get(_routes["default"].search, _videoController.search);
/* user controller */

globalRouter.get(_routes["default"].join, _middlewares.onlyPublic, _userController.getJoin);
globalRouter.post(_routes["default"].join, _middlewares.onlyPublic, _userController.postJoin, _userController.postLogin);
globalRouter.get(_routes["default"].login, _middlewares.onlyPublic, _userController.getLogin);
globalRouter.post(_routes["default"].login, _middlewares.onlyPublic, _userController.postLogin);
globalRouter.get(_routes["default"].logout, _middlewares.onlyPrivate, _userController.logout);
/* 깃허브 로그인 */

globalRouter.get(_routes["default"].gitHub, _userController.githubLogin);
globalRouter.get(_routes["default"].githubCallback, _passport["default"].authenticate("github", {
  failureRedirect: "/login"
}), _userController.postGithubLogIn);
/* 카카오 로그인 */

globalRouter.get(_routes["default"].kakao, _userController.kakaoLogin);
globalRouter.get(_routes["default"].kakaoCallback, _passport["default"].authenticate("kakao", {
  failureRedirect: "/login"
}), _userController.postKakaoLogIn);
/* 구글 로그인 */

globalRouter.get(_routes["default"].google, _userController.googleLogin);
globalRouter.get(_routes["default"].googleCallback, _passport["default"].authenticate("google", {
  failureRedirect: "/login"
}), _userController.postGoogleLogIn);
globalRouter.get(_routes["default"].me, _userController.getMe);
var _default = globalRouter;
exports["default"] = _default;