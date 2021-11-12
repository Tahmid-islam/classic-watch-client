import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Typography, Box } from "@mui/material";

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
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ py: 3, fontWeight: "bold", color: "#3C6382" }}
      >
        Our Reviews
      </Typography>
      <Slider {...settings}>
        {reviews.map((review) => {
          return (
            <Box sx={{ px: 4, mx: 4 }}>
              <Box sx={{ textAlign: "center", p: 3 }}>
                <Typography variant="h5">{review.name}</Typography>
                <Typography variant="body1">{review.review}</Typography>
              </Box>
            </Box>
          );
        })}
      </Slider>
    </Container>
  );
}
