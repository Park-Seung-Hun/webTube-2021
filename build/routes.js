"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* URL route 저장소*/
// Global url
var HOME = "/";
var SEARCH = "/search";
var JOIN = "/join";
var LOGIN = "/login";
var LOGOUT = "/logout"; // User url

var USERS = "/users";
var USER_DETAIL = "/:id";
var USER_EDIT_PROFILE = "/edit-profile";
var USER_CHANGE_PASSWORD = "/change-password";
var ME = "/me"; // Github

var GITHUB = "/auth/github";
var GITHUB_CALLBACK = "/auth/github/callback"; // Kakao

var KAKAO = "/oauth/kakao";
var KAKAO_CALLBACK = "/oauth/kakao/callback"; // Google

var GOOGLE = "/auth/google";
var GOOGLE_CALLBACK = "/auth/google/callback"; // Videos url

var VIDEOS = "/videos";
var UPLOAD_VIDEO = "/upload";
var DETAIL_VIDEO = "/:id";
var EDIT_VIDEO = "/:id/edit";
var DELETE_VIDEO = "/:id/delete"; // API

var API = "/api";
var REGISTER_VIEW = "/:id/view";
var ADD_COMMENT = "/:id/comment"; // Object

var routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userdetail: function userdetail(id) {
    if (id) {
      return "/users/".concat(id);
    } else {
      return USER_DETAIL;
    }
  },
  editprofile: USER_EDIT_PROFILE,
  changepassword: USER_CHANGE_PASSWORD,
  videos: VIDEOS,
  detailvideo: function detailvideo(id) {
    if (id) {
      return "/videos/".concat(id);
    } else {
      return DETAIL_VIDEO;
    }
  },
  editvideo: function editvideo(id) {
    if (id) {
      return "/videos/".concat(id, "/edit");
    } else {
      return EDIT_VIDEO;
    }
  },
  deletevideo: function deletevideo(id) {
    if (id) {
      return "/videos/".concat(id, "/delete");
    } else {
      return DELETE_VIDEO;
    }
  },
  uploadvideo: UPLOAD_VIDEO,
  gitHub: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,
  google: GOOGLE,
  googleCallback: GOOGLE_CALLBACK,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT,
  me: ME
};
var _default = routes;
exports["default"] = _default;