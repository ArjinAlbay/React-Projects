import React, { useState } from "react";
import { categories } from "../data/categories";

function Category() {
  const [categoryList, setCategories] = useState(categories);

  const [search, setSearch] = useState(``);

  //   *******show
  let showCategory = () => {
    setCategories(categories);
  };
  // ******** remove
  let removeCategory = () => {
    setCategories([]);
  };
  // ******* remove id
  let removeItem = (id) => {
    let newCategoryList = categoryList.filter((item) => item.id !== id);

    setCategories(newCategoryList);
  };

  //   ****** search
  const searchCategory = (data) => {
    let searchData = data.toLowerCase().trim();
    let newCategories = categories.filter((q) =>
      q.name.toLowerCase().includes(searchData)
    );
    setCategories(newCategories);
  };

  return (
    <>
      <input
        type="text"
        placeholder="search by name.."
        onChange={(e) => searchCategory(e.target.value)}
      />

      <button> Order By Name</button>
      <button> Order By Desc</button>

      <table>
        <tr>
          <td style={{ marginRight: "15px" }}>İd</td>
          <td>Name</td>
          <td>Description</td>
        </tr>

        {categoryList &&
          categoryList.map((item, key) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  {" "}
                  <button onClick={() => removeItem(item.id)}>remove</button>
                </td>
              </tr>
            );
          })}
      </table>

      <button onClick={() => showCategory()}>show</button>
      <button onClick={() => removeCategory()}>remove</button>
    </>
  );
}

export default Category;
