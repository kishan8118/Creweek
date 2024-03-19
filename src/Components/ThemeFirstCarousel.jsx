import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text } from "@chakra-ui/react";

const ThemeFirstCarousel = () => {
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
          slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box className="slider-container ">
      <Slider {...settings}>
        {/* Slide 1 */}
        <Text>2024 THEMES</Text>
        <Text>Energy Markets</Text>
        <Text>Policy and Geopolitics</Text>
        <Text>Company Strategies</Text>
        <Text>Power Markets in Transition</Text>
        <Text>New Supply Chains for Net Zero</Text>
        <Text>Capital Transition</Text>
        <Text>Technology and Innovation</Text>
        <Text>Climate and Sustainability</Text>
      </Slider>
    </Box>
  );
};

export default ThemeFirstCarousel;
