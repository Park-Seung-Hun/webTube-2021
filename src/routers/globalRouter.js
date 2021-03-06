import express from "express";
/* url 저장 routes */
import routes from "../routes";
/* Controller*/
import {
  getJoin,
  getLogin,
  getMe,
  githubLogin,
  googleLogin,
  kakaoLogin,
  logout,
  postGithubLogIn,
  postGoogleLogIn,
  postJoin,
  postKakaoLogIn,
  postLogin,
} from "../controller/userController";
import { home, search } from "../controller/videoController";
import { onlyPrivate, onlyPublic } from "../middlewares";
import passport from "passport";

const globalRouter = express.Router();

/*video controller*/
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

/* user controller */
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);

/* 깃허브 로그인 */
globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

/* 카카오 로그인 */
globalRouter.get(routes.kakao, kakaoLogin);

globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  postKakaoLogIn
);

/* 구글 로그인 */
globalRouter.get(routes.google, googleLogin);

globalRouter.get(
  routes.googleCallback,
  passport.authenticate("google", { failureRedirect: "/login" }),
  postGoogleLogIn
);

globalRouter.get(routes.me, getMe);

export default globalRouter;
