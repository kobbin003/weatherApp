const fetchMyApi = (location) => {
  console.log("fetching");
  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((response) => {
      if (!response.ok) {
        console.log(response.error);
        throw Error(response.status);
      }
      console.log("response", response);
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
      return data;
    })
    .then((weatherInfo) => {
      // inject the HTML
      console.log(`${weatherInfo.name}, ${weatherInfo.temperature} C`);
      const weatherString = `${weatherInfo.name}, ${weatherInfo.temperature} C, ${weatherInfo.weather_descriptions[0]}`;
      document.querySelector("#weather-info").textContent = weatherString;
    })
    .catch((e) => {
      console.log(e);
      document.querySelector("#weather-info").textContent =
        "Unable to find location. Try another search";
    });
};

export default fetchMyApi;
