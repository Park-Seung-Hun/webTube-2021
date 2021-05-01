import passport from "passport";
import GithubStrategy from "passport-github";
import KakaoStrategy from "passport-kakao";
import GoogleStrategy from "passport-google-oauth20";
import User from "./models/User";
import {
  githubLoginCallback,
  googleLoginCallback,
  kakaoLoginCallback,
} from "./controller/userController";
import routes from "./routes";

// strategy: 로그인 방식
passport.use(User.createStrategy());

// github 로그인
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `https://cryptic-sea-36033.herokuapp.com${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

// kakao 로그인
passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_ID,
      clientSecret: process.env.KAKAO_SECRET,
      callbackURL: `https://cryptic-sea-36033.herokuapp.com${routes.kakaoCallback}`,
    },
    kakaoLoginCallback
  )
);

// 구글 로그인

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: `https://cryptic-sea-36033.herokuapp.com${routes.googleCallback}`,
    },
    googleLoginCallback
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
