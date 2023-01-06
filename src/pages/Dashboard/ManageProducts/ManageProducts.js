import { Container, Table, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import CustomButton from "../../../StyledComponents/CustomButton";

export default function ManageProducts() {
  const [products, setProducts] = React.useState([]);
  let count = 1;

  React.useEffect(() => {
    fetch(`https://classic-watch-server.onrender.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [products]);

  //Delete
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://classic-watch-server.onrender.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingProducts = products.filter((pd) => pd._id !== id);
            setProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <Container>
      <Typography
        variant="h4"
        align="center"
        sx={{ py: 4, fontWeight: "bold", color: "#e74c3c" }}
      >
        Manage Products
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Serial</TableCell>
              <TableCell align="center">Product Id</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{count++}</TableCell>
                <TableCell align="center">{row._id}</TableCell>
                <TableCell align="center">
                  <img width="50%" src={row.img} alt="" />
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">
                  <CustomButton onClick={() => handleDeleteProduct(row._id)}>
                    X
                  </CustomButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
