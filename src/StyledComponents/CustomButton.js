import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)({
  background: "#ff4d4d",
  color: "#fff",
  padding: "10px 15px",
  "&:hover": {
    //you want this to be the same as the backgroundColor above
    backgroundColor: "#ff4d4d",
  },
});

export default CustomButton;
