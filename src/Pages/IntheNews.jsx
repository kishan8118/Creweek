import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NewCarousel from "../Components/NewCarousel";
import Footer from "../Components/Footer";

const IntheNews = () => {
  return (
    <>
      <Box
        // border="1px solid red"
        position="absolute"
        top={{
          base: "56px",
          sm: "56px",
          md: "62px",
          lg: "118px",
          xl: "110px",
        }}
        left={0}
        w="100%"
        backgroundImage="url(https://cdn.ihsmarkit.com/www/images/1222/ceraweek-news-page-hero-1.jpg)"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box
          bg="rgba(0, 0, 0, 0.3)"
          zIndex={11111}
          p="61px"
          //   ml={{ base: "", sm: "", md: "", lg: "10rem", xl: "22rem" }}
        >
          <Center>
            <Box
              color="white"
              w={{ base: "", sm: "", md: "50%", lg: "40%", xl: "32%" }}
            >
              <Text
                textAlign="center"
                fontSize="42px"
                lineHeight="48px"
                mb="13px"
              >
                CERAWeek News{" "}
              </Text>
              <Text
                textAlign="center"
                fontWeight="400"
                mb="13px"
                lineHeight="28px"
                fontSize={"24px"}
              >
                Timely news and S&P Global research & analysis addressing the
                current energy landscape{" "}
              </Text>
            </Box>
          </Center>
        </Box>
      </Box>

      <Box
        bg="brand.300"
        position="absolute"
        top={{ base: "", sm: "", md: "410px", lg: "370px", xl: "360px" }}
        p={6}
        w="100%"
        display={{ base: "none", sm: "", md: "none", lg: "flex", xl: "flex" }}
        justifyContent="center"
      >
        <Box
          display="flex"
          w={{ base: "none", sm: "", md: "none", lg: "40%", xl: "30%" }}
          justifyContent="space-between"
          alignItems="center"
          fontSize="14px"
          fontWeight="600"
          lineHeight="17px"
        >
          <Text>Media Coverage</Text>
          <Text>Connect with us on social media</Text>
          <Text>Press Releases</Text>
        </Box>
      </Box>

      <Box
        // border="1px solid red"
        bg="brand.300"
        position="absolute"
        top={{
          base: "490px",
          sm: "308px",
          md: "342px",
          lg: "457px",
          xl: "457px",
        }}
        p={6}
        w="100%"
        display={{ base: "", sm: "", md: "block", lg: "none", xl: "none" }}
      >
        <NewCarousel />
      </Box>

      <Center>
        <Box
          borderBottom="1px solid black"
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "90%",
            xl: "60%",
          }}
          position="absolute"
          top={{
            base: "40rem",
            sm: "25rem",
            md: "28rem",
            lg: "30rem",
            xl: "30rem",
          }}
        >
          <Text
            textAlign="center"
            lineHeight="1.6"
            mb="24px"
            fontSize="34px"
            fontWeight="500"
          >
            Media Coverage
          </Text>
          <Text
            textAlign="center"
            lineHeight="1.6"
            mb="24px"
            fontSize="16px"
            fontWeight="500"
          >
            Insights into the energy landscape from our renowned S&P Global
            thought leaders and researchers
          </Text>
        </Box>
      </Center>

      <Center>
        <Box
          position="absolute"
          top={{
            base: "55rem",
            sm: "37rem",
            md: "40rem",
            lg: "40rem",
            xl: "40rem",
          }}
          display="flex"
          justifyContent="center"
          flexDirection={{
            base: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "80%",
            xl: "60%",
          }}
          gap={7}
        >
          <Box w="90%" bg="lightgray">
            <Image src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-ken-ash-16-9-1.jpg" />

            <Text p={3}>
              Climate change emerges at Houston's largest energy conference:
              'There's big momentum'
            </Text>
          </Box>
          <Box w="90%" bg="lightgray">
            <Image
              w="98%"
              src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-ev-demand-power-grid-image-list-504x305.jpg"
            />

            <Text p={3}>
              Climate change emerges at Houston's largest energy conference:
              'There's big momentum'
            </Text>
          </Box>
          <Box w="90%" bg="lightgray">
            <Image src="https://cdn.ihsmarkit.com/www/images/0223/dan-promo-bookcase.png" />

            <Text p={3}>
              Climate change emerges at Houston's largest energy conference:
              'There's big momentum'
            </Text>
          </Box>
        </Box>
      </Center>

      <Center>
        <Box
          position="absolute"
          top={{
            base: "110rem",
            sm: "56rem",
            md: "60rem",
            lg: "60rem",
            xl: "60rem",
          }}
          display="flex"
          justifyContent="center"
          flexDirection={{
            base: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          s
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "80%",
            xl: "60%",
          }}
          gap={7}
        >
          <Box w="90%" bg="lightgray">
            <Image src="https://cdn.ihsmarkit.com/www/images/0123/PR-PROMO-ceraweek-2023-granholm-PR-promo-16-9.jpg" />

            <Text p={3}>
              Climate change emerges at Houston's largest energy conference:
              'There's big momentum'
            </Text>
          </Box>
          <Box w="90%" bg="lightgray">
            <Image
              w="100%"
              src="https://cdn.ihsmarkit.com/www/images/1023/In-the-News-DY_.jpeg"
            />

            <Text p={3}>
              Climate change emerges at Houston's largest energy conference:
              'There's big momentum'
            </Text>
          </Box>
          <Box w="90%" bg="lightgray">
            <Image src="https://cdn.ihsmarkit.com/www/images/0423/ceraweek-2023-dan-yergin-media-page-promo-16-9-1.jpg" />

            <Text p={3}>
              Climate change emerges at Houston's largest energy conference:
              'There's big momentum'
            </Text>
          </Box>
        </Box>
      </Center>

      <Center>
        <Box
          borderBottom="1px solid black"
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "90%",
            xl: "60%",
          }}
          position="absolute"
          top={{
            base: "165rem",
            sm: "75rem",
            md: "80rem",
            lg: "80rem",
            xl: "80rem",
          }}
        >
          <Text
            textAlign="center"
            lineHeight="1.6"
            mb="24px"
            fontSize="34px"
            fontWeight="500"
          >
            Press Releases{" "}
          </Text>
        </Box>
      </Center>

      <Center>
        <Box
          position="absolute"
          top={{
            base: "175rem",
            sm: "85rem",
            md: "90rem",
            lg: "90rem",
            xl: "90rem",
          }}
          display="flex"
          justifyContent="center"
          flexDirection={{
            base: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          w={{
            base: "90%",
            sm: "90%",
            md: "90%",
            lg: "80%",
            xl: "60%",
          }}
          gap={7}
        >
          <Box w="90%" bg="lightgray">
            <Image src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-al-jaber-16-9-1.jpg" />

            <Box pt="40px">
              <Text p={4}>March 19, 2024</Text>
              <Text p={4}>CREWeek 2024</Text>
              <Text p={4} color="brand.400" fontSize="16px" fontWeight="700">
                COP28 President, Dr. Sultan Al Jaber Receives Leadership Award
                at CERAWeek by S&P Global 2024
              </Text>
            </Box>
          </Box>
          <Box w="90%" bg="lightgray">
            <Image
              w="98%"
              src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2022-press-page-promo-1-16-9.jpg"
            />

            <Box pt="40px">
              <Text p={4}>March 14, 2024</Text>
              <Text p={4}>CREWeek 2024</Text>
              <Text p={4} color="brand.400" fontSize="16px" fontWeight="700">
                CERAWeek by S&P Global to Showcase the 2024 Class of Energy
                Innovation Pioneers
              </Text>
            </Box>
          </Box>
          <Box w="90%" bg="lightgray">
            <Image src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-isaacson-16-9-1.jpg" />

            <Box pt="40px">
              <Text p={4}>March 11, 2024</Text>
              <Text p={4}>CREWeek 2024</Text>
              <Text p={4} color="brand.400" fontSize="16px" fontWeight="700">
                Bestselling Author Walter Isaacson, Leaders from ARPA-E, AWS,
                LanzaTech, Microsoft and Radia Headline Innovation and
                Technology Programming at CERAWeek by S&P Global 2023
              </Text>
            </Box>
          </Box>
        </Box>
      </Center>

      <Box
        mt={3}
        position="absolute"
        top={{
          base: "260rem",
          sm: "120rem",
          md: "120rem",
          lg: "120rem",
          xl: "120rem",
        }}
      >
        <Footer />
      </Box>
    </>
  );
};

export default IntheNews;
