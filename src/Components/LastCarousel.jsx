import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, IconButton, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const LastCarousel = () => {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <Box className="slider-container">
      <Slider {...settings}>
        {/* Slide 1 */}
        <Box>
          <Image
            src="https://cdn.ihsmarkit.com/www/images/1122/ceraweek-2023-yergin-2-SIB.jpg"
            _hover={{ filter: "brightness(80%)", cursor: "pointer" }}
          />
          <Box
            position="absolute"
            top={{ base: "6rem", sm: "12rem", md: "18rem", lg: "", xl: "" }}
            color="brand.200"
            p="50px"
          >
            <Text
              fontSize="22px"
              fontWeight="500"
              lineHeight="26px"
              marginTop="15px"
            >
              Daniel Yergin
            </Text>
            <Text
              fontSize="16px"
              fontWeight="500"
              lineHeight="20px"
              marginTop="20px"
            >
              Vice Chairman, S&P Global
            </Text>
            <Button
              mt="20px"
              rightIcon={<ArrowForwardIcon />}
              bg="none"
              color="brand.200"
              pl="initial"
              fontWeight="bold"
              _hover={{ bg: "none" }}
            >
              SPEAKER DETAILS
            </Button>
          </Box>
        </Box>
        <Box>
          <Image
            _hover={{ filter: "brightness(80%)", cursor: "pointer" }}
            src="https://cdn.ihsmarkit.com/www/images/1122/ceraweek-2023-pascual-2-SIB.jpg"
          />{" "}
          <Box
            position="absolute"
            top={{ base: "6rem", sm: "12rem", md: "18rem", lg: "", xl: "" }}
            color="brand.200"
            p="50px"
          >
            <Text
              fontSize="22px"
              fontWeight="500"
              lineHeight="26px"
              marginTop="15px"
            >
              Carlos Pascual{" "}
            </Text>
            <Text
              fontSize="16px"
              fontWeight="500"
              lineHeight="20px"
              marginTop="20px"
              w="50%"
            >
              Senior Vice President, Geopolitics and International Affairs{" "}
            </Text>
            <Button
              mt="20px"
              rightIcon={<ArrowForwardIcon />}
              bg="none"
              color="brand.200"
              pl="initial"
              fontWeight="bold"
              _hover={{ bg: "none" }}
            >
              SPEAKER DETAILS
            </Button>
          </Box>{" "}
        </Box>
        <Box>
          <Image
            _hover={{ filter: "brightness(80%)", cursor: "pointer" }}
            src="https://cdn.ihsmarkit.com/www/images/1122/ceraweek-2023-arya-2-SIB.jpg"
          />{" "}
          <Box
            position="absolute"
            top={{ base: "6rem", sm: "12rem", md: "18rem", lg: "", xl: "" }}
            color="brand.200"
            p="50px"
          >
            <Text
              fontSize="22px"
              fontWeight="500"
              lineHeight="26px"
              marginTop="15px"
            >
              Atul Arya{" "}
            </Text>
            <Text
              fontSize="16px"
              fontWeight="500"
              lineHeight="20px"
              marginTop="20px"
              w="50%"
            >
              Senior Vice President & Chief Energy Strategist{" "}
            </Text>
            <Button
              mt="20px"
              rightIcon={<ArrowForwardIcon />}
              bg="none"
              color="brand.200"
              pl="initial"
              fontWeight="bold"
              _hover={{ bg: "none" }}
            >
              SPEAKER DETAILS
            </Button>
          </Box>{" "}
        </Box>
      </Slider>
    </Box>
  );
};

export default LastCarousel;
