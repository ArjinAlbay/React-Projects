import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { useEffect } from "react";

function AutocompleteSample() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/categories`).then((res) => {
      let autoData = [];

      res.data.forEach((element) => {
        autoData.push({ label: element.name, name: element.id });

        setCategories(autoData);
      });
    });
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={categories}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="categories" />}
    />
  );
}

export default AutocompleteSample;

