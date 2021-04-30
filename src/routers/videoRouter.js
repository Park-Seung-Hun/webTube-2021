import express from "express";
import routes from "../routes";
import {
  deleteVideo,
  detailVideo,
  getuploadVideo,
  postuploadVideo,
  postEditVideo,
  getEditVideo,
} from "../controller/videoController";
import { onlyPrivate, uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// video Upload
videoRouter.get(routes.uploadvideo, onlyPrivate, getuploadVideo);
videoRouter.post(routes.uploadvideo, onlyPrivate, uploadVideo, postuploadVideo);

// video Delete
videoRouter.get(routes.deletevideo(), onlyPrivate, deleteVideo);

// video Edit
videoRouter.get(routes.editvideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editvideo(), onlyPrivate, postEditVideo);

// video Detail
videoRouter.get(routes.detailvideo(), detailVideo);

export default videoRouter;
