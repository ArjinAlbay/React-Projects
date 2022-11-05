import React from "react";
import { useState } from "react";

function AddCategory() {
  const [name, setName] = useState(``);
  const [description, setDescription] = useState(``);

  let addCategory = () => {
    let newCategory = {
      name: name,
      description: description,
    };

    let requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newCategory }),
    };

    fetch(`https://northwind.vercel.app/api/suppliers/`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log("new category", data);
      });
  };

  return (
    <>
      <div>
        <label></label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label></label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div>
        <button onClick={() => addCategory()}>add</button>
      </div>
    </>
  );
}

export default AddCategory;
