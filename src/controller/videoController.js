import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

/* 메인 페이지 */
export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "메인 페이지", videos }); // videos 배열 전달.
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "메인 페이지", videos: [] }); // videos 배열 전달.
  }
};

/* 검색 페이지 */
export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req; // form의 input(term) 정보를 받아온다.
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" },
      // $regex: 정규 표현식
      // $option: "i" : 덜 민감하게 만들어줌 (모든 단어 가능)
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "검색", searchingBy, videos });
};

/* 동영상 업로드 */
export const getuploadVideo = (req, res) =>
  res.render("uploadVideo", { pageTitle: "업로드" });

export const postuploadVideo = async (req, res) => {
  const {
    body: { title, description },
    file: { location },
  } = req;

  const newVideo = await Video.create({
    fileUrl: location,
    title,
    description,
    creator: req.user.id,
  });

  req.user.videos.push(newVideo.id);
  req.user.save();
  res.redirect(routes.detailvideo(newVideo.id));
};

/* 동영상 세부정보 */
export const detailVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id)
      .populate("creator")
      .populate("comments");

    res.render("detailVideo", { pageTitle: video.title, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

/* 동영상 세부정보 편집 */
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id);

    if (video.creator.toString() !== req.user.id) {
      throw Error();
    } else {
      res.render("editVideo", { pageTitle: `${video.title} 편집`, video });
    }
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

/* 동영상 삭제 */
export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id);

    if (video.creator.toString() !== req.user.id) {
      throw Error();
    } else {
      await Video.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

// 조회수 등록
export const postRegisterView = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

// 댓글 작성

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user,
  } = req;

  try {
    const video = await Video.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: user.id,
    });
    video.comments.push(newComment.id);
    video.save();
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};
