// const express = require('express')
import express from "express";
import * as url from "url";
import * as path from "path";
import hbs from "hbs";
import router from "./api.js";

export const app = express();
const port = process.env.PORT || 3000;
console.log("checking..", port);
// app.engine('handlebars', hbs.engine);
// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

//. define paths for express config:
// directory to serve
const directoryToServe = path.join(__dirname, "../public");
// path of views
const viewsPath = path.join(__dirname, "../template/views");
// path of partials
const partialPath = path.join(__dirname, "../template/partials");

//. to serve static directory
//.[this is necessary for css and js files]
app.use(express.static(directoryToServe));

//.setup template engine and views location
// set template engine
app.set("view engine", "hbs");
// set views path[no need to set if folder named as 'views']
app.set("views", viewsPath);
// set partials
hbs.registerPartials(partialPath);

//. routes
app.get("/", (req, res) => {
  res.render("index", { title: "Weather", name: "Kobin" });
});

app.get("/help", (req, res) => {
  res.render("help", { title: "Help", name: "Kobin" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About", name: "Kobin" });
});
//.wildcard routing
app.get("/*/*", (req, res) => {
  res.render("404_2", { title: "404", msg: "article not found tri" });
  // res.send('Page not found')
});

//.routers
app.use("/trial", router);

app.use("/weather", router);

//.404
app.get("*", (req, res) => {
  res.render("404", { title: "404", msg: "page not found" });
  // res.send('404: page not found')
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
