import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://images.pexels.com/photos/266666/pexels-photo-266666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    imgPath:
      "https://images.pexels.com/photos/4124334/pexels-photo-4124334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    imgPath:
      "https://images.pexels.com/photos/7067572/pexels-photo-7067572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    imgPath:
      "https://images.pexels.com/photos/849701/pexels-photo-849701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

function LatestProducts() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container>
      <Typography
        variant="h4"
        align="center"
        sx={{ py: 4, fontWeight: "bold", color: "#3C6382" }}
      >
        Latest Products
      </Typography>
      <Box sx={{ maxWidth: 2000, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            width: "80%",
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.imgPath}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
      <Box sx={{ py: 3, my: 3 }}>
        <img
          src="https://i.ibb.co/f2B3vnZ/Screenshot-2021-11-12-211849.png"
          width="100%"
          alt=""
        />
      </Box>
    </Container>
  );
}

export default LatestProducts;
