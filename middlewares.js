import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WebTube"; /* local 변수 siteName*/
  res.locals.routes = routes;
  next();
};
