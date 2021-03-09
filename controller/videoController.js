import { videos } from "../fakeDB";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos }); // videos 배열 전달.
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req; // form의 input(term) 정보를 받아온다.

  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const uploadVideo = (req, res) =>
  res.render("uploadVideo", { pageTitle: "Upload" });
export const detailVideo = (req, res) =>
  res.render("detailVideo", { pageTitle: "DetailVideo" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
