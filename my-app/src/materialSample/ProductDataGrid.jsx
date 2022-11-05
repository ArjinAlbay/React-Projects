import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
function ProductDataGrid() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/products/`)
      .then((res) => setProduct(res.data));
  }, []);

  const column = [
    {
      field: `id`,
      headerName: `Product id`,
      with: 150,
    },
    {
      field: `name`,
      headerName: `Product name`,
      with: 150,
    },
    {
      field: `unitPrice`,
      headerName: `Product price`,
      with: 150,
    },
    {
      field: `unitsInStock`,
      headerName: `Product stock`,
      with: 150,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={product}
        columns={column}
        pageSize={50}
        rowsPerPageOptions={[50]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}

export default ProductDataGrid;
