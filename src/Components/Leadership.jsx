import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const Leadership = () => {
  return (
    <>
      <Center>
        <Flex w={{ base: "", sm: "", md: "90%", lg: "60%", xl: "60%" }}>
          <Box>
            <Image
              src="https://cdn.ihsmarkit.com/www/images/1122/ceraweek-2023-yergin-2-SIB.jpg"
              _hover={{ filter: "brightness(80%)", cursor: "pointer" }}
            />
            <Box
              position="absolute"
              top={{ base: "", sm: "", md: "", lg: "7rem", xl: "13rem" }}
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
                pb={3}
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
              top={{ base: "", sm: "", md: "", lg: "7rem", xl: "13rem" }}
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
                fontSize="13px"
                fontWeight="500"
                lineHeight="20px"
                marginTop="20px"
                w="60%"
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
            </Box>
          </Box>

          <Box>
            <Image
              _hover={{ filter: "brightness(80%)", cursor: "pointer" }}
              src="https://cdn.ihsmarkit.com/www/images/1122/ceraweek-2023-arya-2-SIB.jpg"
            />{" "}
            <Box
              position="absolute"
              top={{ base: "", sm: "", md: "", lg: "7rem", xl: "13rem" }}
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
                w="70%"
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
            </Box>
          </Box>
        </Flex>
      </Center>
    </>
    // </Box>
  );
};

export default Leadership;
