export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req; //req안에 있는 body에서 정보 추출

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: register User
    // ToDo: log user in
    res.redirect(routes.home);
  }
};

export const login = (req, res) => res.render("login", { pageTitle: "Log in" });
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Log out" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "user Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "changePassword" });
