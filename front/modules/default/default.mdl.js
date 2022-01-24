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
    console.log(req.body)
    const ret = await call('post', apiURL + '/users/login', req.body)
    console.log(ret)
    res.render("pages/login", {
      title: "Connexion",
      login: true,
      data: ret
    })
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
    const url = `${apiURL}/users/add`;

    req.body.pwd = await encryptPWD(req.body.pwd)

    const params = req.body;
    const payload = await call("post", url, params)
    if(payload.data.error){
      res.redirect("/register");
      return
    }
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