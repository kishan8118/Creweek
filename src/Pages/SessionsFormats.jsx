import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { session } from "../sessiondata";
import SessionCard from "../Components/SessionCard";
import Footer from "../Components/Footer";

const SessionsFormats = () => {
  return (
    <>
      <Box
        // border="1px solid red"
        position="absolute"
        top={{ base: "56px", sm: "78px", md: "80px", lg: "118px", xl: "110px" }}
        left={0}
        w="100%"
        backgroundImage="url(https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-EC-session-formats-page-hero-1.jpg)"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box
          bg="rgba(0, 0, 0, 0.2)"
          zIndex={11111}
          //   w={{ base: "", sm: "", md: "50%", lg: "40%", xl: "3%" }}
          p="41px"
          ml={{ base: "", sm: "", md: "8rem", lg: "10rem", xl: "22rem" }}
        >
          <Box
            color="brand.200"
            w={{ base: "", sm: "", md: "50%", lg: "40%", xl: "32%" }}
            pt={{ base: "0px", sm: "41px", md: "0px", lg: "", xl: "" }}
            pb={{ base: "0px", sm: "41px", md: "0px", lg: "", xl: "" }}
          >
            <Text fontSize="42px" lineHeight="48px" mb="13px">
              Executive Conference Program
            </Text>
            <Text fontSize="16px" lineHeight="22px" pb="15px" fontWeight="600">
              Sessions focus on the most relevant themes and topics facing the
              energy industry addressed by the most prominent voices in the
              industry
            </Text>
            <Button
              m="30px 30px 30px 0px"
              rightIcon={<ArrowForwardIcon />}
              bg="white"
              fontWeight="bold"
            >
              THEMES
            </Button>
          </Box>
        </Box>
      </Box>

      <Center>
        <Box
          position="absolute"
          top={{
            base: "42rem",
            sm: "35rem",
            md: "35rem",
            lg: "35rem",
            xl: "35rem",
          }}
          w={{ base: "90%", sm: "90%", md: "95%", lg: "90%", xl: "60%" }}
        >
          <Box pb="30px" borderBottom="1px solid black">
            <Center>
              <Text fontSize="34px" lineHeight="40px" fontWeight="400">
                Session Formats{" "}
              </Text>
            </Center>
          </Box>

          <Center>
            <Grid
              position="absolute"
              top={{
                base: "7rem",
                sm: "7rem",
                md: "7rem",
                lg: "7rem",
                xl: "6rem",
              }}
              templateColumns={{
                base: "repeat(1,1fr)",
                sm: "repeat(1,1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(3,1fr)",
              }}
              gap={5}
              w={{ base: "", sm: "70%", md: "95%", lg: "100%", xl: "100%" }}
            >
              {session.map((el, i) => (
                <SessionCard
                  key={i}
                  image={el.image}
                  desc={el.description}
                  category={el.category}
                />
              ))}
            </Grid>
          </Center>
        </Box>
      </Center>

      <Box
        position="absolute"
        top={{
          base: "190rem",
          sm: "210rem",
          md: "90rem",
          lg: "100rem",
          xl: "90rem",
        }}
      >
        <Footer />
      </Box>
    </>
  );
};

export default SessionsFormats;
