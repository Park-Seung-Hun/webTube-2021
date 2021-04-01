### 📖 webTube-2021

- Vanilla and Node JS를 이용해 Youtube를 클론 코딩.

### 📒 Pages:

- [ ] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [x] Edit Profile
- [x] Change Password
- [x] Upload
- [ ] Video Detail
- [ ] Edit Video

### ✅ 사용 Skills

1. NodeJS

   - ExpressJS
   - ES6 using Babel

2. Pug
3. SCSS
4. MongoDB
5. Mongoose
6. ESLint
7. Webpack

### 📕 주요 기능

- Fuction
  - `init.js`: PORT와 연결
  - `app.js`: MiddleWares, Routers, view등 전반적인 기능을 통솔하기 위한 JS
  - `routes.js`: URL route 저장소
  - `db.js`: Mongoose와 Dotenv를 이용해 DB를 연결
  - `middlewares.js`: Multer를 이용해 file을 업로드하고 URL을 반환하는 middleware 동작.
  - `controller`: user Content와 video Content의 동작을 담당한다
    1. `userController`: Join, Login, Logout, UserDetail, EditProfile, ChangePassword 기능
    2. `videoController`: home, search, uploadVideo, detailVideo, editVideo, deleteVideo 기능, Models에서 DB에 저장된 정보를 Controll
  - `routers`: 페이지의 각 route를 분할
    1. `globalRouter`: home, search,oin, Login, Logout Route 분류
    2. `userRouter`: UserDetail, EditProfile, ChangePassword Route 분류
    3. `videoRouter`: uploadVideo, detailVideo, editVideo, deleteVideo Route 분류
  - `models`: Comment, Video의 model과 schema를 작성 기능
    1. `Comment.js`: Comment에 대한 model과 schema(text, createdAt)
    2. `Video.js`:Video에 대한 model과 schema(fileUrl, title, description, views, createdAt, comments)

```
├── controller
|     ├── userController.js
|     └── videoController.js
├── routers
|     ├── globalRouter.js
|     ├── userRouter.js
|     └── videoRouter.js
├── models
|     ├── Comment.js
|     └── Video.js
├── app.js
├── db.js
├── init.js
├── middlewares.js
└── routes.js
```

- Views: pug를 이용해 각 페이지의 틀 제작.
  - `layouts`
    1. `main.pug`: 모든 페이지의 토대를 담당
  - `mixins`
    1. `videoBlock.pug`: video의 정보를 캡슐화
  - `partials`
    1. `header.pug`: 페이지의 상단 부분
    2. `footer.pug`: 페이지의 하단 부분
    3. `socialLogin.pug`: Github 및 Facebook Login을 위한 부분
  - `userViews`: userController의 모든 페이지를 구성
  - `videoViews`: videoController의 모든 페이지를 구성

```
└── views
    ├── layouts
    |     └── main.pug
    ├── mixins
    |     └── videoBlock.pug
    ├── partials
    |     ├── footer.pug
    |     ├── header.pug
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

```
├── assets
|     ├── js
|     |   └── main.js
|     └── scss
|         ├── config
|         |   ├── _variables.scss
|         |   └── reset.scss
|         ├── pages
|         |   └── home.scss
|         └── partials
|             ├── main.scss
|             └── style.scss
|
└── static
     ├── main.js
     └── styles.css
```

### 📘 추가할 기능

1. 인증 미들웨어인 Passportjs를 이용해 Login 기능.
2. Relationships and Route 보호
3. Video Player Custom
