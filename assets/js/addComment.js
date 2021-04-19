import axios from "axios";
const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

/* 댓글 개수 늘리기 */
const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

/* 댓글 추가 */
const addComment = (comment) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

/* 댓글 삭제 */
const hadleDeleteComment = async (event) => {
  event.preventDefault();

  const commentId = window.document
    .getElementById("jsCommentId")
    .getAttribute("comment-id");

  const li = event.target.parentNode.parentNode;
  commentUL.removeChild(li);

  const response = await axios({
    url: `/api/${commentId}/delete`,
    method: "post",
  });
  if (response.status === 200) {
    commentLength.innerHTML = parseInt(commentLength.innerHTML, 10) - 1;
    if (commentLength.innerHTML === "1") {
      commentS.innerHTML = "comment";
    } else {
      commentS.innerHTML = "comments";
    }
  }
};

const handelSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handelSubmit);
}

if (addCommentForm) {
  init();
}
