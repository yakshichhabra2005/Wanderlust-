// controllers/users.js
const User = require("../models/user");

// Render signup page
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

// Signup logic
module.exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome to Wanderlust");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

// Render login page
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

// Login logic
module.exports.login = (req, res) => {
  req.flash("success", "Welcome back to Wanderlust");
  const redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

// Logout logic
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "You are logged out now!");
    res.redirect("/listings");
  });
};
