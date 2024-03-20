import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, IconButton, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const CarouselCompo = () => {
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
    <Box
      className="slider-container "
      w="100%"
      position="absolute"
      top={{ base: "3rem", sm: "2rem", md: "3.4rem", lg: "7rem", xl: "7rem" }}
    >
      <Slider {...settings}>
        {/* Slide 1 */}
        <Box>
          <Image
            w="-webkit-fill-available"
            position="relative"
            src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-dan-yergin-stage-blue-SIB-2.jpg"
          />

          <Box
            pl={50}
            position="absolute"
            color="white"
            top={{
              base: "180px",
              sm: "540px",
              md: "290px",
              lg: "250px",
              xl: "350px",
            }}
            zIndex="1"
          >
            <Text
              fontSize={{
                base: "20px",
                sm: "40px",
                md: "30px",
                lg: "37px",
                xl: "44px",
              }}
            >
              Join us CREWeek <br /> 2024
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{
                base: "10px",
                sm: "30px",
                md: "20px",
                lg: "20px",
                xl: "30px",
              }}
              w={{ base: "60%", sm: "60%", md: "35%", lg: "40%", xl: "50%" }}
            >
              Multidimensional Energy Transition: Markets, climate, technology
              and geopolitics
            </Text>
            <Box mt={4} display="flex" gap={4}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg="white"
                fontWeight="bold"
              >
                THEMES
              </Button>
              <Button
                rightIcon={<ArrowForwardIcon />}
                //   bg="white"
                colorScheme="white"
                variant="outline"
                fontWeight="bold"
              >
                REGISTER
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Slide 2 */}

        <Box>
          <Image
            w="-webkit-fill-available"
            position="relative"
            src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-live-stream-SIB-1.jpg"
          />

          <Box
            pl={50}
            position="absolute"
            color="white"
            top={{
              base: "180px",
              sm: "540px",
              md: "290px",
              lg: "250px",
              xl: "350px",
            }}
            zIndex="1"
          >
            <Text
              fontSize={{
                base: "20px",
                sm: "40px",
                md: "30px",
                lg: "37px",
                xl: "44px",
              }}
            >
              Join us CREWeek <br /> 2024
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{
                base: "10px",
                sm: "30px",
                md: "20px",
                lg: "20px",
                xl: "30px",
              }}
              w={{ base: "60%", sm: "60%", md: "35%", lg: "40%", xl: "50%" }}
            >
              Multidimensional Energy Transition: Markets, climate, technology
              and geopolitics
            </Text>
            <Box mt={4} display="flex" gap={4}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg="white"
                fontWeight="bold"
              >
                THEMES
              </Button>
              <Button
                rightIcon={<ArrowForwardIcon />}
                //   bg="white"
                colorScheme="white"
                variant="outline"
                fontWeight="bold"
              >
                REGISTER
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Slide 3 */}

        <Box>
          <Image
            w="-webkit-fill-available"
            position="relative"
            src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-speakers-on-stage-SIB-1.jpg"
          />

          <Box
            pl={50}
            position="absolute"
            color="white"
            top={{
              base: "180px",
              sm: "540px",
              md: "290px",
              lg: "250px",
              xl: "350px",
            }}
            zIndex="1"
          >
            <Text
              fontSize={{
                base: "20px",
                sm: "40px",
                md: "30px",
                lg: "37px",
                xl: "44px",
              }}
            >
              Join us CREWeek <br /> 2024
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{
                base: "10px",
                sm: "40px",
                md: "30px",
                lg: "37px",
                xl: "30px",
              }}
              w={{ base: "60%", sm: "60%", md: "35%", lg: "40%", xl: "50%" }}
            >
              Multidimensional Energy Transition: Markets, climate, technology
              and geopolitics
            </Text>
            <Box mt={4} display="flex" gap={4}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg="white"
                fontWeight="bold"
              >
                THEMES
              </Button>
              <Button
                rightIcon={<ArrowForwardIcon />}
                //   bg="white"
                colorScheme="white"
                variant="outline"
                fontWeight="bold"
              >
                REGISTER
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Slide 4 */}

        <Box>
          <Image
            w="-webkit-fill-available"
            position="relative"
            src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-88-speaker-grid-SIB-2.jpg"
          />

          <Box
            pl={50}
            position="absolute"
            color="white"
            top={{
              base: "180px",
              sm: "540px",
              md: "290px",
              lg: "250px",
              xl: "350px",
            }}
            zIndex="1"
          >
            <Text
              fontSize={{
                base: "20px",
                sm: "40px",
                md: "30px",
                lg: "37px",
                xl: "44px",
              }}
            >
              Join us CREWeek <br /> 2024
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{
                base: "10px",
                sm: "30px",
                md: "20px",
                lg: "20px",
                xl: "30px",
              }}
              w={{ base: "60%", sm: "60%", md: "35%", lg: "40%", xl: "50%" }}
            >
              Multidimensional Energy Transition: Markets, climate, technology
              and geopolitics
            </Text>
            <Box mt={4} display="flex" gap={4}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg="white"
                fontWeight="bold"
              >
                THEMES
              </Button>
              <Button
                rightIcon={<ArrowForwardIcon />}
                //   bg="white"
                colorScheme="white"
                variant="outline"
                fontWeight="bold"
              >
                REGISTER
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Slide 5 */}

        <Box>
          <Image
            w="-webkit-fill-available"
            position="relative"
            src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-speaker-announcement-bill-gates-SIB.jpg"
          />

          <Box
            pl={50}
            position="absolute"
            color="white"
            top={{
              base: "180px",
              sm: "540px",
              md: "290px",
              lg: "250px",
              xl: "350px",
            }}
            zIndex="1"
          >
            <Text
              fontSize={{
                base: "20px",
                sm: "40px",
                md: "30px",
                lg: "37px",
                xl: "44px",
              }}
            >
              Join us CREWeek <br /> 2024
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{
                base: "10px",
                sm: "30px",
                md: "20px",
                lg: "20px",
                xl: "30px",
              }}
              w={{ base: "60%", sm: "60%", md: "35%", lg: "40%", xl: "50%" }}
            >
              Multidimensional Energy Transition: Markets, climate, technology
              and geopolitics
            </Text>
            <Box mt={4} display="flex" gap={4}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg="white"
                fontWeight="bold"
              >
                THEMES
              </Button>
              <Button
                rightIcon={<ArrowForwardIcon />}
                //   bg="white"
                colorScheme="white"
                variant="outline"
                fontWeight="bold"
              >
                REGISTER
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Slide 6 */}

        <Box>
          <Image
            w="-webkit-fill-available"
            position="relative"
            src="https://cdn.ihsmarkit.com/www/images/0224/ceraweek-2023-speakers-isaacson-1-SIB.jpg"
          />

          <Box
            pl={50}
            position="absolute"
            color="white"
            top={{
              base: "180px",
              sm: "540px",
              md: "290px",
              lg: "250px",
              xl: "350px",
            }}
            zIndex="1"
          >
            <Text
              fontSize={{
                base: "20px",
                sm: "40px",
                md: "30px",
                lg: "37px",
                xl: "44px",
              }}
            >
              Join us CREWeek <br /> 2024
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{
                base: "10px",
                sm: "30px",
                md: "20px",
                lg: "20px",
                xl: "30px",
              }}
              w={{ base: "60%", sm: "60%", md: "35%", lg: "40%", xl: "50%" }}
            >
              Multidimensional Energy Transition: Markets, climate, technology
              and geopolitics
            </Text>
            <Box mt={4} display="flex" gap={4}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg="white"
                fontWeight="bold"
              >
                THEMES
              </Button>
              <Button
                rightIcon={<ArrowForwardIcon />}
                //   bg="white"
                colorScheme="white"
                variant="outline"
                fontWeight="bold"
              >
                REGISTER
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Slide 6 */}

        <Box>
          <Image
            w="-webkit-fill-available"
            position="relative"
            src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-speaker-announcement-john-kerry-SIB.jpg"
          />

          <Box
            pl={50}
            position="absolute"
            color="white"
            top={{
              base: "180px",
              sm: "540px",
              md: "290px",
              lg: "250px",
              xl: "350px",
            }}
            zIndex="1"
          >
            <Text
              fontSize={{
                base: "20px",
                sm: "40px",
                md: "30px",
                lg: "37px",
                xl: "44px",
              }}
            >
              Join us CREWeek <br /> 2024
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{
                base: "10px",
                sm: "30px",
                md: "20px",
                lg: "20px",
                xl: "30px",
              }}
              w={{ base: "60%", sm: "60%", md: "35%", lg: "40%", xl: "50%" }}
            >
              Multidimensional Energy Transition: Markets, climate, technology
              and geopolitics
            </Text>
            <Box mt={4} display="flex" gap={4}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg="white"
                fontWeight="bold"
              >
                THEMES
              </Button>
              <Button
                rightIcon={<ArrowForwardIcon />}
                //   bg="white"
                colorScheme="white"
                variant="outline"
                fontWeight="bold"
              >
                REGISTER
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Slide 7 */}

        <Box>
          <Image
            w="-webkit-fill-available"
            position="relative"
            src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-EC-and-Agora-agenda-SIB-3.jpg"
          />

          <Box
            pl={50}
            position="absolute"
            color="white"
            top={{
              base: "180px",
              sm: "540px",
              md: "290px",
              lg: "250px",
              xl: "350px",
            }}
            zIndex="1"
          >
            <Text
              fontSize={{
                base: "20px",
                sm: "40px",
                md: "30px",
                lg: "37px",
                xl: "44px",
              }}
            >
              Join us CREWeek <br /> 2024
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{
                base: "10px",
                sm: "30px",
                md: "20px",
                lg: "20px",
                xl: "30px",
              }}
              w={{ base: "60%", sm: "60%", md: "35%", lg: "40%", xl: "50%" }}
            >
              Multidimensional Energy Transition: Markets, climate, technology
              and geopolitics
            </Text>
            <Box mt={4} display="flex" gap={4}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg="white"
                fontWeight="bold"
              >
                THEMES
              </Button>
              <Button
                rightIcon={<ArrowForwardIcon />}
                //   bg="white"
                colorScheme="white"
                variant="outline"
                fontWeight="bold"
              >
                REGISTER
              </Button>
            </Box>
          </Box>
        </Box>

        <Box>
          <Image
            w="-webkit-fill-available"
            position="relative"
            src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-EC-and-Agora-agenda-SIB-3.jpg"
          />

          <Box
            pl={50}
            position="absolute"
            color="white"
            top={{
              base: "180px",
              sm: "540px",
              md: "290px",
              lg: "250px",
              xl: "350px",
            }}
            zIndex="1"
          >
            <Text
              fontSize={{
                base: "20px",
                sm: "40px",
                md: "30px",
                lg: "37px",
                xl: "44px",
              }}
            >
              Join us CREWeek <br /> 2024
            </Text>
            <Text
              fontWeight="semibold"
              fontSize={{
                base: "10px",
                sm: "30px",
                md: "20px",
                lg: "20px",
                xl: "30px",
              }}
              w={{ base: "60%", sm: "60%", md: "35%", lg: "40%", xl: "50%" }}
            >
              Multidimensional Energy Transition: Markets, climate, technology
              and geopolitics
            </Text>
            <Box mt={4} display="flex" gap={4}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg="white"
                fontWeight="bold"
              >
                THEMES
              </Button>
              <Button
                rightIcon={<ArrowForwardIcon />}
                //   bg="white"
                colorScheme="white"
                variant="outline"
                fontWeight="bold"
              >
                REGISTER
              </Button>
            </Box>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};

export default CarouselCompo;
