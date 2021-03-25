import express from "express";
import routes from "../routes";
import {
  deleteVideo,
  detailVideo,
  getuploadVideo,
  postuploadVideo,
  geteditVideo,
  postEditVideo,
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// video Upload
videoRouter.get(routes.uploadvideo, getuploadVideo);
videoRouter.post(routes.uploadvideo, uploadVideo, postuploadVideo);

// video Delete
videoRouter.get(routes.deletevideo(), deleteVideo);

// video Edit
videoRouter.get(routes.editvideo(), geteditVideo);
videoRouter.post(routes.editvideo(), postEditVideo);

// video Detail
videoRouter.get(routes.detailvideo(), detailVideo);

export default videoRouter;
