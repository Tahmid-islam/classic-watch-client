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
      "https://www.casio-intl.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobheadername1=content-disposition&blobheadervalue1=inline%3Bfilename%3DG-Shock-1200x600.jpg&blobkey=id&blobtable=MungoBlobs&blobwhere=1426272549957&ssbinary=true",
  },
  {
    imgPath:
      "https://www.casio-intl.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobheadername1=content-disposition&blobheadervalue1=inline%3Bfilename%3DEdifice-Chronograph--1200x600.jpg&blobkey=id&blobtable=MungoBlobs&blobwhere=1426249133942&ssbinary=true",
  },
  {
    imgPath: "https://babyg.casio.com/assets2018/img/bga-290bd/main.jpg",
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
        sx={{ py: 4, fontWeight: "bold", color: "#e74c3c" }}
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
                    borderRadius: "10px",
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
