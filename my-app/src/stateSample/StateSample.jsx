import React from "react";
import { useState } from "react";

function StateSample() {


  const [name, setName] = useState(`çağatay`)

  return (
    <>
      <h1>{name}</h1>
      <button onClick={() => setName(`arjin albay`)}> new name</button>
    </>
  );
}
 
export default StateSample;
