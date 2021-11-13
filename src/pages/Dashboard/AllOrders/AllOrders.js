import * as React from "react";
import { Table, Container, Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "../../../hooks/useAuth";
import CustomButton from "../../../StyledComponents/CustomButton";

export default function AllOrders() {
  const [allOrders, setAllOrders] = React.useState([]);

  let count = 1;
  const { user } = useAuth();

  React.useEffect(() => {
    fetch(`https://agile-plains-53305.herokuapp.com/Orders`)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [user.email, allOrders]);

  const handleUpdateStatus = (id) => {
    const proceed = window.confirm("Are you sure, you want to update status?");
    if (proceed) {
      const url = `https://agile-plains-53305.herokuapp.com/updateStatus/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(allOrders),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Status Update Successful");
          }
        });
    }
  };

  //Delete
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://agile-plains-53305.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingOrders = allOrders.filter(
              (order) => order._id !== id
            );
            setAllOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          py: 1,
          my: 3,
          width: "100%",
          textAlign: "center",
          fontWeight: "bold",
          color: "#e74c3c",
        }}
      >
        All Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Serial</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Product Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Order Id</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Change Status</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allOrders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {count++}
                </TableCell>
                <TableCell align="center">
                  <img width="100%" src={row.img} alt="" />
                </TableCell>

                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.productName}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row._id}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell>
                  <CustomButton onClick={() => handleUpdateStatus(row._id)}>
                    Shipped
                  </CustomButton>
                </TableCell>
                <TableCell align="center">
                  <CustomButton onClick={() => handleDeleteOrder(row._id)}>
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
