import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box w="100%">
      <Box
        bg="darkgray"
        display="flex"
        justifyContent={{
          base: "center",
          sm: "center",
          md: "flex-start",
          lg: "flex-start",
          xl: "flex-start",
        }}
        alignItems="center"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        mt={10}
        p={4}
      >
        <Box
          display="flex"
          justifyContent={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "flex-start",
            xl: "flex-start ",
          }}
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          alignItems="center"
        >
          <Image
            src={logo}
            w={{ base: "60%", sm: "20%", md: "20%", lg: "10%", xl: "10%" }}
          />
          <Stack color="white" ml={8}>
            <Box
              display="flex"
              justifyContent={{
                base: "center",
                sm: "center",
                md: "center",
                lg: "flex-start",
                xl: "flex-start ",
              }}
              flexDirection={{
                base: "column",
                sm: "row",
                md: "row",
                lg: "row",
                xl: "row",
              }}
              alignItems="center"
              fontWeight="600"
              gap={6}
            >
              <Text>About Finix196</Text>
              <Text>Finix196 News</Text>
              <Text>RealEstate Blogs</Text>
              <Text>Contact Us</Text>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection={{
                base: "column",
                sm: "row",
                md: "row",
                lg: "row",
                xl: "row",
              }}
              alignItems="center"
              fontWeight="600"
              gap={6}
            >
              <Text>Code of Conduct</Text>
              <Text>Company Travel</Text>
              <Text>Event Sustainability</Text>
              <Text>CERAWeek News</Text>
              <Text>Subscribe</Text>
            </Box>
          </Stack>
        </Box>

        <Box gap={4} display="flex" justifyContent="center" alignItems="center">
          <FaFacebook size={30} color="white" />
          <FaTwitter size={30} color="white" />
          <FaLinkedinIn size={30} color="white" />
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent={{
          base: "center",
          sm: "center",
          md: "space-between",
          lg: "space-between",
          xl: "space-between",
        }}
        alignItems="center"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        bg="gray"
        p={4}
        color="brand.200"
      >
        <Stack>
          <Box
            display="flex"
            justifyContent={{
              base: "center",
              sm: "center",
              md: "initial",
              lg: "initial",
              xl: "initial",
            }}
            flexDirection={{
              base: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            alignItems="center"
            gap={8}
            fontSize="15px"
          >
            <Text>Privacy, Terms & Notices</Text>
            <Text>Cookie Settings</Text>
            <Text>California Do Not Sell</Text>
          </Box>
          <Box
            display="flex"
            justifyContent={{
              base: "center",
              sm: "center",
              md: "space-between",
              lg: "space-between",
              xl: "space-between",
            }}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            alignItems="center"
            gap={4}
            fontSize="15px"
          >
            <Text fontWeight="700">Also of Intrest</Text>
            <Text>Register for the Executive Conference in Houston</Text>
            <Text>Energy Industry’s Calendar Important Annual Event</Text>
            <Text>Multifuel Energy Transition Conference</Text>
          </Box>
        </Stack>
        <Text fontSize="15px">
          Copyright 2024 S&P Global. All Rights Reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
