import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
  googleId: Number,
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
}); // 인증할 username을 email로 설정.

const model = mongoose.model("User", UserSchema);

export default model;
