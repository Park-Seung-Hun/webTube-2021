export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });
export const uploadVideo = (req, res) =>
  res.render("uploadVideo", { pageTitle: "Upload" });
export const detailVideo = (req, res) =>
  res.render("detailVideo", { pageTitle: "DetailVideo" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
