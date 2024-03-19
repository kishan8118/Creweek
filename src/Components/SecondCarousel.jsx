import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Center, IconButton, Image, Text } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const SecondCarousel = () => {
  var settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <>
      <Center>
        <Box width="50%">
          <div
            className="slider-container"
            style={{ border: "1px solid red", width: "98%" }}
          >
            <Slider {...settings}>
              {/* Slide 1 */}
              <Center>
                <Box>
                  <span>
                    <Text>CERAWEEK COMMUNITIES</Text>
                    <Text>
                      Bring together peer groups to address critical industry
                      issues.
                    </Text>
                  </span>
                </Box>
              </Center>
              <Box>
                <span>
                  <Text>CERAWEEK COMMUNITIES</Text>
                  <Text>
                    Bring together peer groups to address critical industry
                    issues.
                  </Text>
                </span>
              </Box>
              <Box>
                <span>
                  <Text>CERAWEEK COMMUNITIES</Text>
                  <Text>
                    Bring together peer groups to address critical industry
                    issues.
                  </Text>
                </span>
              </Box>
              <Box>
                <span>
                  <Text>CERAWEEK COMMUNITIES</Text>
                  <Text>
                    Bring together peer groups to address critical industry
                    issues.
                  </Text>
                </span>
              </Box>
              <Box>
                <span>
                  <Text>CERAWEEK COMMUNITIES</Text>
                  <Text>
                    Bring together peer groups to address critical industry
                    issues.
                  </Text>
                </span>
              </Box>
              <Box>
                <span>
                  <Text>CERAWEEK COMMUNITIES</Text>
                  <Text>
                    Bring together peer groups to address critical industry
                    issues.
                  </Text>
                </span>
              </Box>
            </Slider>
          </div>
        </Box>
      </Center>
    </>
  );
};

export default SecondCarousel;
