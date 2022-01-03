import bodyParser from "body-parser";
import { call, encryptPWD } from "../../services/global.js";
import { needles, apiURL } from "../../services/config.js";

export const home = async (req, res) => {
  res.render("pages/home", {
    title: "Accueil",
  });
};
export const login = async (req, res) => {
  if (req.method == "GET") {
    res.render("pages/login", {
      title: "Connexion",
      login: true,
    });
  }
  if (req.method == "POST") {
    //TODO try/catch a user from database
    res.redirect("/");
  }
};
export const logout = async (req, res) => {
  res.redirect("/");
};
export const register = async (req, res) => {
  if (req.method == "GET") {
    res.render("pages/login", {
      title: "Accueil",
      login: false,
    });
  }
  if (req.method == "POST" || req.method == "post") {
    const url = `${apiURL}/users`;
    const params = req.body;
    const body = await encryptPWD(params);
    const back = await call("post", url, body);
    res.redirect("/login");
  }
};

export const contact = async (req, res) => {
  if (req.method == "GET") {
    res.render("pages/contact", {
      title: "Contact"
    });
  }
  if (req.method == "POST") {
    res.redirect("/");
  }
};