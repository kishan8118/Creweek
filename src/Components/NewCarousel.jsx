import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const NewCarousel = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
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
    ],
  };
  return (
    <Box className="slider-container ">
      <Slider {...settings}>
        <Text>Media Coverage</Text>
        <Text>Connect with us on social media</Text>
        <Text>Press Releases</Text>
      </Slider>
    </Box>
  );
};

export default NewCarousel;
