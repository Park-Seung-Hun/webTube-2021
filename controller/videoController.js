import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos }); // videos 배열 전달.
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] }); // videos 배열 전달.
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req; // form의 input(term) 정보를 받아온다.

  res.render("search", { pageTitle: "Search", searchingBy });
};

export const getuploadVideo = (req, res) =>
  res.render("uploadVideo", { pageTitle: "Upload" });

export const postuploadVideo = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;

  // Todo: 비디오 업로드와 저장
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });

  res.redirect(routes.detailvideo(newVideo.id));
};

export const detailVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id);
    res.render("detailVideo", { pageTitle: "DetailVideo", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
