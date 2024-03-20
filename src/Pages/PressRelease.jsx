import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";

const PressRelease = () => {
  return (
    <>
      <Box
        // border="1px solid red"
        position="absolute"
        top={{ base: "56px", sm: "56px", md: "62px", lg: "118px", xl: "110px" }}
        left={0}
        w="100%"
        backgroundImage="url(https://cdn.ihsmarkit.com/www/images/1222/press-releases-page-hero-5.jpg)"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box
          bg="rgba(0, 0, 0, 0.6)"
          zIndex={11111}
          p="41px"
          ml={{ base: "", sm: "", md: "", lg: "10rem", xl: "22rem" }}
        >
          <Box
            color="white"
            w={{ base: "", sm: "", md: "50%", lg: "40%", xl: "32%" }}
          >
            <Text fontSize="42px" lineHeight="48px" mb="13px">
              Press Releases{" "}
            </Text>
            <Text
              fontWeight="400"
              mb="13px"
              lineHeight="28px"
              fontSize={"24px"}
            >
              Get the latest CERAWeek news and access to media resources{" "}
            </Text>
            <Button
              m="30px 30px 30px 0px"
              rightIcon={<ArrowForwardIcon />}
              bg="white"
              fontWeight="bold"
            >
              REGISTER
            </Button>
          </Box>
        </Box>
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
          <Text lineHeight="1.6" mb="24px" fontSize="34px" fontWeight="500">
            CREWeek 2024
          </Text>
        </Box>
      </Center>

      <Center>
        <Box
          position="absolute"
          top={{
            base: "50rem",
            sm: "35rem",
            md: "38rem",
            lg: "40rem",
            xl: "38rem",
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
            lg: "90%",
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

      <Center>
        <Box
          position="absolute"
          top={{
            base: "140rem",
            sm: "75rem",
            md: "75rem",
            lg: "80rem",
            xl: "78rem",
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
            lg: "90%",
            xl: "60%",
          }}
          gap={7}
        >
          <Box w="90%" bg="lightgray">
            <Image src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-gates-16-9-2.jpg" />

            <Box pt="40px">
              <Text p={4}>March 19, 2024</Text>
              <Text p={4}>CREWeek 2024</Text>
              <Text p={4} color="brand.400" fontSize="16px" fontWeight="700">
                Bill Gates to Address CERAWeek by S&P Global in Houston, March
                18-22
              </Text>
            </Box>
          </Box>
          <Box w="90%" bg="lightgray">
            <Image
              w="98%"
              src="https://cdn.ihsmarkit.com/www/images/0123/PR-PROMO-ceraweek-2023-granholm-PR-promo-16-9.jpg"
            />

            <Box pt="40px">
              <Text p={4}>March 14, 2024</Text>
              <Text p={4}>CREWeek 2024</Text>
              <Text p={4} color="brand.400" fontSize="16px" fontWeight="700">
                US Secretary of Energy Jennifer M. Granholm to Address CERAWeek
                by S&P Global in Houston, March 18-22
              </Text>
            </Box>
          </Box>
          <Box w="90%" bg="lightgray">
            <Image src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-dan-yergin-press-releases-promo-16-9-1.jpg" />

            <Box pt="40px">
              <Text p={4}>March 11, 2024</Text>
              <Text p={4}>CREWeek 2024</Text>
              <Text p={4} color="brand.400" fontSize="16px" fontWeight="700">
                CERAWeek by S&P Global 2024 to Convene Energy CEOs, Government
                Officials and Business and Technology Leaders in Houston, March
                18-22
              </Text>
            </Box>
          </Box>
        </Box>
      </Center>

      <Box
        mt={3}
        position="absolute"
        top={{
          base: "230rem",
          sm: "110rem",
          md: "110rem",
          lg: "120rem",
          xl: "120rem",
        }}
      >
        <Footer />
      </Box>
    </>
  );
};

export default PressRelease;
