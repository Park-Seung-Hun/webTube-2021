/* URL route 저장소*/
// Global url
const HOME = "/";
const SEARCH = "/search";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// User url
const USERS = "/users";
const USER_DETAIL = "/:id";
const USER_EDIT_PROFILE = "/edit-profile";
const USER_CHANGE_PASSWORD = "/change-password";
const ME = "/me";

// Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// Kakao
const KAKAO = "/oauth/kakao";
const KAKAO_CALLBACK = "/oauth/kakao/callback";

// Videos url
const VIDEOS = "/videos";
const UPLOAD_VIDEO = "/upload";
const DETAIL_VIDEO = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// API

const API = "/api";
const REGISTER_VIEW = "/:id/view";

// Object
const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userdetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editprofile: USER_EDIT_PROFILE,
  changepassword: USER_CHANGE_PASSWORD,
  videos: VIDEOS,
  detailvideo: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return DETAIL_VIDEO;
    }
  },
  editvideo: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },
  deletevideo: (id) => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return DELETE_VIDEO;
    }
  },
  uploadvideo: UPLOAD_VIDEO,
  gitHub: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,
  api: API,
  registerView: REGISTER_VIEW,
  me: ME,
};

export default routes;
