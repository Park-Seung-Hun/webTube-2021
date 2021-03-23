import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WebTube"; /* local 변수 siteName*/
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenicated: true,
    id: 1,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
