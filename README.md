### 📖 webTube-2021

- Vanilla and Node JS를 이용해 Youtube를 클론 코딩.


[결과물 보러가기](https://cryptic-sea-36033.herokuapp.com/) 


### 📒 Pages:

- [x] 메인 페이지
- [x] 회원 가입
- [x] 로그인
- [x] 동영상 검색
- [x] 유저 프로필
- [x] 프로필 수정
- [x] 비밀번호 변경
- [x] 동영상 업로드
- [x] 동영상 세부정보
- [x] 동영상 세부정보 편집


### ✅ Stack

#### Back-End 
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/><img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/><img src="https://img.shields.io/badge/Passport-34E27A?style=flat-square&logo=Passport&logoColor=white"/><img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>

#### Front-End 
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/><img src="https://img.shields.io/badge/Pug-A86454?style=flat-square&logo=Pug&logoColor=white"/><img src="https://img.shields.io/badge/Babel-F9DC3E?style=flat-square&logo=Babel&logoColor=black"/><img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/><img src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=Black"/>

### 📕 주요 기능

- Fuction
  - `init.js`: PORT와 연결
  - `app.js`: MiddleWares, Routers, view등 전반적인 기능을 통솔하기 위한 JS
  - `routes.js`: URL route 저장소
  - `db.js`: Mongoose와 Dotenv를 이용해 DB를 연결
  - `middlewares.js`: Multer를 이용해 file을 업로드하고 URL을 반환하는 middleware 동작.
  - `passport.js`: 인증을 위한 passport 미들웨어 동작
  - `controller`: user Content와 video Content의 동작을 담당한다
    1. `userController`: Join, Login, Logout, UserDetail, EditProfile, ChangePassword 기능
    2. `videoController`: home, search, uploadVideo, detailVideo, editVideo, deleteVideo 기능, Models에서 DB에 저장된 정보를 Controll
  - `routers`: 페이지의 각 route를 분할
    1. `globalRouter`: home, search,oin, Login, Logout Route 분류
    2. `userRouter`: UserDetail, EditProfile, ChangePassword Route 분류
    3. `videoRouter`: uploadVideo, detailVideo, editVideo, deleteVideo Route 분류
    4. `apiRouter`: 조회수 및 댓글 추가 기능 Route 분류
  - `models`: Comment, Video의 model과 schema를 작성 기능
    1. `Comment.js`: Comment에 대한 model과 schema(text, createdAt)
    2. `Video.js`: Video에 대한 model과 schema(fileUrl, title, description, views, createdAt, comments)
    3. `User.js`: 유저 정보를 담은 Schema를 생성하여 저장하는 기능.

```
├── controller
|     ├── userController.js
|     └── videoController.js
├── routers
|     ├── apiRouter.js
|     ├── globalRouter.js
|     ├── userRouter.js
|     └── videoRouter.js
├── models
|     ├── Comment.js
|     ├── User.js
|     └── Video.js
├── app.js
├── db.js
├── init.js
├── middlewares.js
├── passport.js
└── routes.js
```

- Views: pug를 이용해 각 페이지의 틀 제작.
  - `layouts`
    1. `main.pug`: 모든 페이지의 토대를 담당
  - `mixins`
    1. `videoBlock.pug`: video의 정보를 캡슐화
    2. `videoPlayer.pug`: 비디오 플레이어 커스텀
    3. `message.pug`: Flash 메세지 커스텀
  - `partials`
    1. `header.pug`: 페이지의 상단 부분
    2. `footer.pug`: 페이지의 하단 부분
    3. `socialJoin.pug`: Github 및 Facebook,Google ID를 이용해 회원가입을 위한 부분
    4. `socialLogin.pug`: Github 및 Facebook,Google ID를 이용해 로그인을 위한 부분
  - `userViews`: userController의 모든 페이지를 구성
  - `videoViews`: videoController의 모든 페이지를 구성

```
└── views
    ├── layouts
    |     └── main.pug
    ├── mixins
    |     ├── videoBlack.pug
    |     ├── videoPlayer.pug
    |     └── message.pug
    ├── partials
    |     ├── footer.pug
    |     ├── header.pug
    |     ├── socialJoin.pug
    |     └── socialLogin.pug
    ├── userViews
    |     ├── changePassword.pug
    |     ├── editProfile.pug
    |     ├── join.pug
    |     ├── login.pug
    |     └── userDetail.pug
    └── videoViews
          ├── deleteVideo.pug
          ├── detailVideo.pug
          ├── editVideo.pug
          ├── home.pug
          ├── search.pug
          └── uploadVideo.pug
```

3. Assets: SCSS를 이용해 페이지를 꾸밈.
  - `js`
    1. `addComment.js`: 댓글 추가 기능
    2. `main.js`: 메인 js
    3. `videoPlayer.js`: 비디오 플레이어 커스텀
    4. `videoRecorder.js` : 녹화 기능 커스텀

```
├── assets
|     ├── js
|     |   ├── addComment.js
|     |   ├── main.js
|     |   ├── videoPlayer.js
|     |   └── videoRecorder.js
|     └── scss
|         ├── config
|         |   ├── _variables.scss
|         |   ├── utils.scss
|         |   └── reset.scss
|         ├── pages
|         |   ├── home.scss
|         |   ├── userProfile.scss
|         |   └── videoDetail.scss
|         ├── partials
|         |   ├── footer.scss
|         |   ├── form.scss
|         |   ├── header.scss
|         |   ├── social.scss
|         |   ├── videoBlock.scss
|         |   ├── videoPlayer.scss
|         |   └── videoRecorder.scss
|         ├── main.scss
|         └── style.scss
└── static
     ├── main.js
     └── styles.css
```

### 📘 추가할 기능
1. 댓글 삭제 기능
2. 댓글 작성 시 프로필 + 이름 + 작성날짜
3. 비디오 업로드시 썸네일에 프로필 + 이름 + 작성 
