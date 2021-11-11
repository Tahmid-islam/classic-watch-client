import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useAuth from "../../../hooks/useAuth";
import CustomButton from "../../../StyledComponents/CustomButton";

export default function MyOrders() {
  const [myOrders, setMyOrders] = React.useState([]);
  let count = 1;
  const { user } = useAuth();

  React.useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);

  return (
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
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{count++}</TableCell>
              <TableCell align="center">
                <img width="70%" src={row.img} alt="" />
              </TableCell>

              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.productName}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row._id}</TableCell>
              <TableCell align="center">
                <CustomButton>X</CustomButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
