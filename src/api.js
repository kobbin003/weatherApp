import express from "express";
import { weatherApi } from "./utils/config.js";
import { weatherCode } from "./utils/weatherCode.js";
const router = express.Router();
const port = 3000;

router.get("/", (req, res) => {
  console.log("/weather accessed");
  const address = req.query.address;
  if (!address) {
    return res.send({ errormsg: "address is required" });
  } else {
    const url = `http://api.weatherstack.com/current?access_key=${weatherApi}&query=${address}`;
    weatherCode(
      url,
      (
        error,
        //?DESTRUCTURE AN ASYNCHRONOUS DATA??????????
        // {
        //   location: { name = "" } = {},
        //   current: { temperature = "", weather_descriptions = "" } = {},
        // } = {}
        data
      ) => {
        //destructuring;
        const {
          location: { name },
          current: { temperature, weather_descriptions },
        } = data;

        if (error) {
          console.log("1");
          return res.send({ error });
        } else if (data.error) {
          console.log("2");
          return res.send({ error: data?.error });
        } else {
          console.log("3  ");
          return res.send({
            name,
            temperature,
            weather_descriptions,
          });
        }
      }
    );
  }
});

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
//   });

export default router;