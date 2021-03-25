import routes from "../routes";
import Video from "../models/Video";

// home VideoController
export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos }); // videos 배열 전달.
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] }); // videos 배열 전달.
  }
};

// search VideoController
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req; // form의 input(term) 정보를 받아온다.

  res.render("search", { pageTitle: "Search", searchingBy });
};

// upload VideoController
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

// detail VideoController
export const detailVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id);
    res.render("detailVideo", { pageTitle: video.title, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

// edit VideoController
export const geteditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.detailvideo(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

// delete VideoController
export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {}
  res.redirect(routes.home);
};
