import React, { useState } from "react";
import axios from "axios";

function AddCategoryWithAxios() {
  const [name, setName] = useState(``);
  const [description, setDescription] = useState(``);

  let addNewCategoryAxios = () => {
    let newCategory = {
      name: name,
      description: description,
    };

    axios
      .post("https://northwind.vercel.app/api/suppliers", newCategory)
      .then((res) => console.log("axios response: ", res));
  };

  return (
    <>
      <div>
        <label>name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>description</label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div>
        <button onClick={() => addNewCategoryAxios()}>add</button>
      </div>
    </>
  );
}

export default AddCategoryWithAxios;
