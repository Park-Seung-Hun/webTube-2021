import routes from "../routes";
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos }); // videos 배열 전달.
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req; // form의 input(term) 정보를 받아온다.

  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getuploadVideo = (req, res) =>
  res.render("uploadVideo", { pageTitle: "Upload" });

export const postuploadVideo = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // Todo: 비디오 업로드와 저장
  res.redirect(routes.detailvideo(324393));
};

export const detailVideo = (req, res) =>
  res.render("detailVideo", { pageTitle: "DetailVideo" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
