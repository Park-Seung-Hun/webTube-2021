/* URL route 저장소*/
// Global url
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User url
const USERS = "/users";
const USER_DETAIL = "/:id";
const USER_EDIT_PROFILE = "/edit-profile";
const USER_CHANGE_PASSWORD = "/change-password";

// Videos url
const VIDEOS = "/videos";
const UPLOAD_VIDEO = "/upload";
const DETAIL_VIDEO = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// Object
const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,

  users: USERS,
  userdetail: USER_DETAIL,
  usereditprofile: USER_EDIT_PROFILE,
  userchangepassword: USER_CHANGE_PASSWORD,

  videos: VIDEOS,
  detailvideo: DETAIL_VIDEO,
  editvideo: EDIT_VIDEO,
  deletevideo: DELETE_VIDEO,
  uploadvideo: UPLOAD_VIDEO,
};

export default routes;
