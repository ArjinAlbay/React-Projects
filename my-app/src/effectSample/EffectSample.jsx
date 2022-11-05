import React from "react";
import { useState } from "react";

function EffectSample() {
  const [sayac, setsayac] = useState(0);

  return (
    <>
      <h1> Sayac {sayac} </h1>
      <button onClick={() => setsayac(sayac + 1)}>arttır </button>
    </>
  );
}

export default EffectSample;
