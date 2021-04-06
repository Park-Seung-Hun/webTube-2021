import passport from "passport";
import User from "./models/User";

// strategy: 로그인 방식
passport.use(User.createStrategy());
