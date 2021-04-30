"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postChangePassword = exports.getChangePassword = exports.getMe = exports.userDetail = exports.postEditProfile = exports.getEditProfile = exports.postGoogleLogIn = exports.googleLoginCallback = exports.googleLogin = exports.postKakaoLogIn = exports.kakaoLoginCallback = exports.kakaoLogin = exports.postGithubLogIn = exports.githubLoginCallback = exports.githubLogin = exports.logout = exports.postLogin = exports.getLogin = exports.postJoin = exports.getJoin = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _routes = _interopRequireDefault(require("../routes"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* 회원가입 */
var getJoin = function getJoin(req, res) {
  res.render("join", {
    pageTitle: "회원 가입"
  });
};

exports.getJoin = getJoin;

var postJoin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, name, email, password, password2, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password, password2 = _req$body.password2; //req안에 있는 body에서 정보 추출

            if (!(password !== password2)) {
              _context.next = 6;
              break;
            }

            res.status(400);
            res.render("join", {
              pageTitle: "회원 가입"
            });
            _context.next = 18;
            break;

          case 6:
            _context.prev = 6;
            _context.next = 9;
            return (0, _User["default"])({
              name: name,
              email: email
            });

          case 9:
            user = _context.sent;
            _context.next = 12;
            return _User["default"].register(user, password);

          case 12:
            next();
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](6);
            res.redirect(_routes["default"].home);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 15]]);
  }));

  return function postJoin(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/* 로그인 로그아웃 */


exports.postJoin = postJoin;

var getLogin = function getLogin(req, res) {
  return res.render("login", {
    pageTitle: "로그인"
  });
};

exports.getLogin = getLogin;

var postLogin = _passport["default"].authenticate("local", {
  failureRedirect: _routes["default"].login,
  successRedirect: _routes["default"].home
});

exports.postLogin = postLogin;

var logout = function logout(req, res) {
  req.logout(); // todo : 로그아웃 처리

  res.redirect(_routes["default"].home);
};
/* GitHub 로그인 */


exports.logout = logout;

var githubLogin = _passport["default"].authenticate("github");

exports.githubLogin = githubLogin;

var githubLoginCallback = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, __, profile, cb) {
    var _profile$_json, id, avatarUrl, name, email, user, newUser;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // json 내부의 요소를 가져온다.
            _profile$_json = profile._json, id = _profile$_json.id, avatarUrl = _profile$_json.avatar_url, name = _profile$_json.name, email = _profile$_json.email; // cb: passport에서 제공된 callback 함수(인증에 성공한 상황에서 호출)

            _context2.prev = 1;
            _context2.next = 4;
            return _User["default"].findOne({
              email: email
            });

          case 4:
            user = _context2.sent;
            console.log(id); // user가 존재하는 경우(동일한 email을 가진 유저)

            if (!user) {
              _context2.next = 13;
              break;
            }

            user.githubId = id;
            user.email = email;
            user.avatarUrl = avatarUrl;
            user.name = name;
            user.save();
            return _context2.abrupt("return", cb(null, user));

          case 13:
            _context2.next = 15;
            return _User["default"].create({
              email: email,
              name: name,
              githubId: id,
              avatarUrl: avatarUrl
            });

          case 15:
            newUser = _context2.sent;
            return _context2.abrupt("return", cb(null, newUser));

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", cb(_context2.t0));

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 19]]);
  }));

  return function githubLoginCallback(_x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();

exports.githubLoginCallback = githubLoginCallback;

var postGithubLogIn = function postGithubLogIn(req, res) {
  res.redirect(_routes["default"].home);
};
/* KaKao 로그인 */


exports.postGithubLogIn = postGithubLogIn;

var kakaoLogin = _passport["default"].authenticate("kakao");

exports.kakaoLogin = kakaoLogin;

var kakaoLoginCallback = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_, __, profile, cb) {
    var id, name, _profile$_json2, profile_image, email, user, newUser;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = profile.id, name = profile.username, _profile$_json2 = profile._json, profile_image = _profile$_json2.properties.profile_image, email = _profile$_json2.kakao_account.email;
            _context3.prev = 1;
            _context3.next = 4;
            return _User["default"].findOne({
              email: email
            });

          case 4:
            user = _context3.sent;

            if (!user) {
              _context3.next = 9;
              break;
            }

            user.kakaoId = id;
            user.save();
            return _context3.abrupt("return", cb(null, user));

          case 9:
            _context3.next = 11;
            return _User["default"].create({
              email: email,
              name: name,
              kakaoId: id,
              avatarUrl: profile_image
            });

          case 11:
            newUser = _context3.sent;
            return _context3.abrupt("return", cb(null, newUser));

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", cb(_context3.t0));

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 15]]);
  }));

  return function kakaoLoginCallback(_x8, _x9, _x10, _x11) {
    return _ref3.apply(this, arguments);
  };
}();

exports.kakaoLoginCallback = kakaoLoginCallback;

var postKakaoLogIn = function postKakaoLogIn(req, res) {
  res.redirect(_routes["default"].home);
};
/* Google 로그인 */


exports.postKakaoLogIn = postKakaoLogIn;

var googleLogin = _passport["default"].authenticate("google", {
  scope: ["profile", "email"]
});

exports.googleLogin = googleLogin;

var googleLoginCallback = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_, __, profile, cb) {
    var _profile$_json3, id, name, email, avatarUrl, user, newUser;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log(profile);
            _profile$_json3 = profile._json, id = _profile$_json3.sub, name = _profile$_json3.name, email = _profile$_json3.email, avatarUrl = _profile$_json3.picture;
            _context4.prev = 2;
            _context4.next = 5;
            return _User["default"].findOne({
              email: email
            });

          case 5:
            user = _context4.sent;

            if (!user) {
              _context4.next = 13;
              break;
            }

            user.googleId = id;
            _context4.next = 10;
            return _User["default"].findOneAndUpdate({
              email: email
            });

          case 10:
            cb(null, user);
            _context4.next = 17;
            break;

          case 13:
            _context4.next = 15;
            return _User["default"].create({
              name: name,
              email: email,
              avatarUrl: avatarUrl,
              googleId: id
            });

          case 15:
            newUser = _context4.sent;
            cb(null, newUser);

          case 17:
            _context4.next = 23;
            break;

          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            cb(_context4.t0);

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 19]]);
  }));

  return function googleLoginCallback(_x12, _x13, _x14, _x15) {
    return _ref4.apply(this, arguments);
  };
}();

exports.googleLoginCallback = googleLoginCallback;

var postGoogleLogIn = function postGoogleLogIn(req, res) {
  res.redirect(_routes["default"].home);
};
/* 유저 정보 갱신 */


exports.postGoogleLogIn = postGoogleLogIn;

var getEditProfile = function getEditProfile(req, res) {
  return res.render("editProfile", {
    pageTitle: "프로필 편집"
  });
};

exports.getEditProfile = getEditProfile;

var postEditProfile = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$body2, name, email, file;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, file = req.file;
            _context5.prev = 1;
            _context5.next = 4;
            return _User["default"].findByIdAndUpdate(req.user._id, {
              name: name,
              email: email,
              avatarUrl: file ? file.location : req.user.avatarUrl
            });

          case 4:
            res.redirect(_routes["default"].me);
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](1);
            res.render(_routes["default"].editprofile);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 7]]);
  }));

  return function postEditProfile(_x16, _x17) {
    return _ref5.apply(this, arguments);
  };
}();
/* 유저 정보 */


exports.postEditProfile = postEditProfile;

var userDetail = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.prev = 1;
            _context6.next = 4;
            return _User["default"].findById(id).populate("videos");

          case 4:
            user = _context6.sent;
            res.render("userDetail", {
              pageTitle: "회원 정보",
              user: user
            });
            _context6.next = 12;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.redirect(_routes["default"].home);

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));

  return function userDetail(_x18, _x19) {
    return _ref6.apply(this, arguments);
  };
}();

exports.userDetail = userDetail;

var getMe = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.user._id;
            _context7.prev = 1;
            _context7.next = 4;
            return _User["default"].findById(id).populate("videos");

          case 4:
            user = _context7.sent;
            res.render("userDetail", {
              pageTitle: "회원 정보",
              user: user
            });
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](1);
            res.redirect(_routes["default"].home);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[1, 8]]);
  }));

  return function getMe(_x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();
/* 비밀번호 변경 */


exports.getMe = getMe;

var getChangePassword = function getChangePassword(req, res) {
  return res.render("changePassword", {
    pageTitle: "비밀번호 변경"
  });
};

exports.getChangePassword = getChangePassword;

var postChangePassword = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var _req$body3, oldPassword, newPassword, newPassword1;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body3 = req.body, oldPassword = _req$body3.oldPassword, newPassword = _req$body3.newPassword, newPassword1 = _req$body3.newPassword1;
            _context8.prev = 1;

            if (!(newPassword !== newPassword1)) {
              _context8.next = 6;
              break;
            }

            res.status(400);
            res.redirect("/users/".concat(_routes["default"].changepassword));
            return _context8.abrupt("return");

          case 6:
            _context8.next = 8;
            return req.user.changePassword(oldPassword, newPassword);

          case 8:
            res.redirect(_routes["default"].me);
            _context8.next = 15;
            break;

          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](1);
            res.status(400);
            res.redirect("/users/".concat(_routes["default"].changepassword));

          case 15:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[1, 11]]);
  }));

  return function postChangePassword(_x22, _x23) {
    return _ref8.apply(this, arguments);
  };
}();

exports.postChangePassword = postChangePassword;