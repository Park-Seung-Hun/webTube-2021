import express from "express";
/* url 저장 routes */
import routes from "../routes";
/* Controller*/
import {
  getJoin,
  getLogin,
  githubLogin,
  logout,
  postGithubLogIn,
  postJoin,
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

/* user controller github*/
globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);

export default globalRouter;
