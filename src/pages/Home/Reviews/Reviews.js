import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Typography } from "@mui/material";
import Rating from "react-rating";
import CardContent from "@mui/material/CardContent";
import "./Reviews.css";

export default function Reviews() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://agile-plains-53305.herokuapp.com/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ py: 3, fontWeight: "bold", color: "#e74c3c" }}
      >
        Our Reviews
      </Typography>
      <Slider {...settings}>
        {reviews.map((review) => {
          return (
            <React.Fragment key={review._id}>
              <CardContent
                sx={{
                  backgroundColor: "#ecf0f1",
                  boxShadow: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  color="#3867D6"
                  gutterBottom
                >
                  {review.name}
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  <Rating
                    initialRating={review.rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                  ></Rating>
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
                <Typography
                  variant="body2"
                  sx={{ minHeight: "20vh", textAlign: "justify" }}
                >
                  {review.message}
                </Typography>
              </CardContent>
            </React.Fragment>
          );
        })}
      </Slider>
    </Container>
  );
}
