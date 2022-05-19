import fetchMyApi from "./fetchMyApi.js";
// const fetchMyApi = require("./fetch.js");
window.onload = function (params) {
  console.log("This is the app.js");

  //search form
  const locationSearch = document.getElementById("locationsearch");

  locationSearch.onsubmit = (e) => {
    // console.log("target", e);
    // console.log("search entered", e.target[0].value);
    // console.log("search entered", e.target.elements[0].value);
    // console.log("search entered", e.target.querySelector("#searchValue").value);
    const location = e.target.querySelector("#searchValue").value;

    //fetchMyApi
    fetchMyApi(location);
    // console.log("ll");
    // e.preventDefault();
  };
};
