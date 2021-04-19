import express from "express";
import {
  postAddComment,
  postRegisterView,
} from "../controller/videoController";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
/*
server와 통신하기 위한 URL(유저는 접속이 불가능하다.)
*/
