import React from "react";
import { useState } from "react";

function ArrayStateSample() {
  let cityList = [
    `istanbul`,
    `izmir`,
    `ankara`,
    `diyarbakır`,
    `aydın`,
    `trabzon`,
  ];

  const [cities, setCityList] = useState(cityList);

  const loadCity = () => {
    setCityList(cityList);
  };
  return (
    <>
      <ul>
        {cities.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>

      <button onClick={() => setCityList([])}> Empty City</button>
      <button onClick={() => loadCity()}> Load City</button>
    </>
  );
}

export default ArrayStateSample;
