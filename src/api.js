import express from "express";
import { weatherApi } from "./utils/config.js";
import { weatherCode } from "./utils/weatherCode.js";
const router = express.Router();

router.get("/", (req, res) => {
  // console.log("/weather accessed");
  const address = req.query.address;
  if (!address) {
    return res.send({ errormsg: "address is required" });
  } else {
    const url = `http://api.weatherstack.com/current?access_key=${weatherApi}&query=${address}`;
    weatherCode(url)
      .then((data) => {
        console.log("success-app!");

        return res.send({
          name: data.location.name,
          temperature: data.current.temperature,
          weather_descriptions: data.current.weather_descriptions,
        });
      })
      .catch((error) => console.log("error-app", error));
    // (async function noname() {
    //   try {
    //     const data = weatherCode(url);
    //     console.log("success-app!", data);
    //     //destructuring;
    //     // const {
    //     //   location: { name },
    //     //   current: { temperature, weather_descriptions },
    //     // } = data;
    //     return res.send({...data});
    //   } catch (error) {
    //     console.log("error-app", error);
    //   }
    //   weatherCode(url).the
    // })();
  }
});

export default router;
