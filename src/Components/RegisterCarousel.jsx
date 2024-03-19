import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, IconButton, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const RegisterCarousel = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    focusOnSelect: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
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
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
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
            w="-webkit-fill-available"
            position="relative"
            src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-dan-yergin-stage-blue-SIB-2.jpg"
          />

          <Box
            w={{ base: "14%", sm: "13%", md: "11%", lg: "", xl: "" }}
            position="absolute"
            top={{ base: "6rem", sm: "42rem", md: "8rem", lg: "", xl: "" }}
            color="brand.200"
            p="50px"
          >
            <Text
              fontSize="22px"
              fontWeight="500"
              lineHeight="26px"
              marginTop="15px"
            >
              CREWeek 2024
            </Text>
            <Text
              fontSize="16px"
              fontWeight="500"
              lineHeight="20px"
              marginTop="20px"
            >
              Multidimensional Energy Transition: Markets, climate, technology
              and geopolitics{" "}
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
              THEMES{" "}
            </Button>
          </Box>
        </Box>

        <Box>
          <Image
            _hover={{ filter: "brightness(80%)", cursor: "pointer" }}
            src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-88-speaker-grid-SIB-2.jpg"
          />{" "}
          <Box
            // border="1px solid red"
            w={{ base: "13%", sm: "13%", md: "11%", lg: "", xl: "" }}
            position="absolute"
            top={{ base: "6rem", sm: "42rem", md: "8rem", lg: "", xl: "" }}
            color="brand.200"
            p="50px"
          >
            <Text
              fontSize="22px"
              fontWeight="500"
              lineHeight="26px"
              marginTop="15px"
            >
              Speakers{" "}
            </Text>
            <Text
              fontSize="16px"
              fontWeight="500"
              lineHeight="20px"
              marginTop="20px"
              w="90%"
            >
              Global leaders, policymakers and executives from across the energy
              spectrum{" "}
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
              VIEW ALL SPEAKERS
            </Button>
          </Box>{" "}
        </Box>

        <Box>
          <Image
            _hover={{ filter: "brightness(80%)", cursor: "pointer" }}
            src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-EC-and-Agora-agenda-SIB-3.jpg"
          />{" "}
          <Box
            // border="1px solid red"
            w={{ base: "13%", sm: "13%", md: "11%", lg: "", xl: "" }}
            position="absolute"
            top={{ base: "6rem", sm: "42rem", md: "8rem", lg: "", xl: "" }}
            color="brand.200"
            p="50px"
          >
            <Text
              fontSize="22px"
              fontWeight="500"
              lineHeight="26px"
              marginTop="15px"
            >
              Conference Agenda{" "}
            </Text>
            <Text
              fontSize="16px"
              fontWeight="500"
              lineHeight="20px"
              marginTop="20px"
              w="90%"
            >
              See all CERAWeek has to offer. New sessions added regularly.
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
              VIEW AGENDA
            </Button>
          </Box>{" "}
        </Box>
      </Slider>
    </Box>
  );
};

export default RegisterCarousel;
