import passport from "passport";
import routes from "../routes";
import User from "../models/User";

/* 회원가입 */
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req; //req안에 있는 body에서 정보 추출

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });

      await User.register(user, password);
      next();
    } catch (error) {
      res.redirect(routes.home);
    }
    // ToDo: log user in
  }
};

/* 로그인 로그아웃 */
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log in" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const logout = (req, res) => {
  req.logout(); // todo : 로그아웃 처리
  res.redirect(routes.home);
};

/* GitHub 로그인 */
export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (_, __, profile, cb) => {
  // json 내부의 요소를 가져온다.
  const {
    _json: { id, avatar_url: avatarUrl, name, email },
  } = profile;

  // cb: passport에서 제공된 callback 함수(인증에 성공한 상황에서 호출)

  try {
    const user = await User.findOne({ email });

    console.log(id);
    // user가 존재하는 경우(동일한 email을 가진 유저)
    if (user) {
      user.githubId = id;
      user.email = email;
      user.avatarUrl = avatarUrl;
      user.name = name;

      user.save();
      return cb(null, user);
    }

    // user가 존재하지 않는 경우
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postGithubLogIn = (req, res) => {
  res.redirect(routes.home);
};

/* KaKao 로그인 */
export const kakaoLogin = passport.authenticate("kakao");

export const kakaoLoginCallback = async (_, __, profile, cb) => {
  const {
    id,
    username: name,
    _json: {
      properties: { profile_image },
      kakao_account: { email },
    },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.kakaoId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      kakaoId: id,
      avatarUrl: profile_image,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postKakaoLogIn = (req, res) => {
  res.redirect(routes.home);
};

/* Google 로그인 */
export const googleLogin = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const googleLoginCallback = async (_, __, profile, cb) => {
  console.log(profile);
  const {
    _json: { sub: id, name, email, picture: avatarUrl },
  } = profile;

  try {
    const user = await User.findOne({ email });
    if (user) {
      user.googleId = id;
      await User.findOneAndUpdate({ email });
      cb(null, user);
    } else {
      const newUser = await User.create({
        name,
        email,
        avatarUrl,
        googleId: id,
      });
      cb(null, newUser);
    }
  } catch (error) {
    console.log(error);
    cb(error);
  }
};

export const postGoogleLogIn = (req, res) => {
  res.redirect(routes.home);
};

/* 유저 정보 갱신 */
export const getEditProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "editProfile" });

export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
    file,
  } = req;

  try {
    await User.findByIdAndUpdate(req.user._id, {
      name,
      email,
      avatarUrl: file ? file.location : req.user.avatarUrl,
    });
    res.redirect(routes.me);
  } catch (error) {
    res.render(routes.editprofile);
  }
};

/* 유저 정보 */

export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id).populate("videos");
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getMe = async (req, res) => {
  const id = req.user._id;
  try {
    const user = await User.findById(id).populate("videos");
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

/* 비밀번호 변경 */
export const getChangePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "changePassword" });

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 },
  } = req;

  try {
    if (newPassword !== newPassword1) {
      res.status(400);
      res.redirect(`/users/${routes.changepassword}`);
      return;
    }
    await req.user.changePassword(oldPassword, newPassword);
    res.redirect(routes.me);
  } catch (error) {
    res.status(400);
    res.redirect(`/users/${routes.changepassword}`);
  }
};
