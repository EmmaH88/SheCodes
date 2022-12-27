import React from "react";
import { Audio } from "react-loader-spinner";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }

  let apiKey = "85bcdd2ad2afb7ce15a8242b1ff12dc1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="pink"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
