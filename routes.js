/* URL route 저장소*/
// Global url
const HOME = "/";
const SEARCH = "/search";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// User url
const USERS = "/users";
const USER_EDIT_PROFILE = "/edit-profile";
const USER_CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";

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
  userDetail: USER_DETAIL,
  editProfile: USER_EDIT_PROFILE,
  changePassword: USER_CHANGE_PASSWORD,

  videos: VIDEOS,
  detailvideo: DETAIL_VIDEO,
  editvideo: EDIT_VIDEO,
  deletevideo: DELETE_VIDEO,
  uploadvideo: UPLOAD_VIDEO,
};

export default routes;
