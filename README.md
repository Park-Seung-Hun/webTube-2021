### 📖 webTube-2021

- Vanilla and Node JS를 이용해 Youtube를 클로닝.

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

1. 기능부

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

2.

```
└── views
    ├── layouts
    |     └──main.pug
    ├── mixins
    |     └──videoBlock.pug
    ├── partials
    |     ├── footer.pug
    |     ├── header.pug
    socialLogin.pug
    ├── userViews
    |     ├── changePassword.pug
    |     ├── editProfile.pug
    |     ├── join.pug
    |     ├── login.pug
    |     └──userDetail.pug
    └── videoViews
          ├── deleteVideo.pug
          ├── detailVideo.pug
          ├── editVideo.pug
          ├── home.pug
          ├── search.pug
          └──uploadVideo.pug


```

3.

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

- `달력` 기능 추가

  1.  기본 달력틀을 JS와 CSS를 통해 구현한다.
  2.  달력에 기념일 & 할일 추가 기능을 JS를 통해 구현한다.

- `Music` 기능 추가
  1.  날씨 or 계절에 맞는 음악 추천
  2.  앨범 표지 회전 효과
