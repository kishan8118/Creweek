import React from "react";
import CarouselCompo from "../Components/CarouselCompo";
import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import SpeakerCarousel from "../Components/SpeakerCarousel";
import Leadership from "../Components/Leadership";
import LastCarousel from "../Components/LastCarousel";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Box>
        <CarouselCompo />
      </Box>
      {/* <SecondCarousel /> */}
      <Center>
        <Box
          w="60%"
          pb="24px"
          position="absolute"
          top={{
            base: "30rem",
            sm: "58rem",
            md: "45rem",
            lg: "50rem",
            xl: "60rem",
          }}
        >
          <Text
            pt="30px"
            pb="30px"
            fontSize="34px"
            lineHeight="40px"
            textAlign="center"
            fontWeight="400"
            borderBottom="1px solid #4A4A4A"
          >
            CERAWeek 2024
          </Text>
          {/* <hr style={{ borderColor: "black" }} /> */}
          {/* <Divider variant="solid" color="brand.100" /> */}
          <Text
            pt="30px"
            lineHeight="1.6"
            fontSize="16px"
            fontWeight="400"
            marginBottom="24px"
          >
            CERAWeek 2024 will explore strategies for a multidimensional,
            multispeed and multifuel energy transition. The drive for energy
            transition is reshaping the competitive landscape for companies and
            countries – creating new opportunities and risks across the energy
            value chain. The imperative to reduce emissions has grown in
            urgency. Yet expectations of a simple linear global transition have
            been shaken as climate goals compete with concerns over how to
            deliver economic growth while ensuring energy security, energy
            access, and affordability. The multidimensional energy transition
            reflects different realities and timelines by region, technology,
            industry strategies, the variety of social and political approaches
            and divergent national priorities in an increasingly multipolar
            world.
          </Text>
          <Center>
            <Button
              variant="outline"
              color="brand.400"
              borderWidth="2px"
              borderColor="brand.400"
              fontSize="18px"
              fontWeight="600"
              _hover={{ bgColor: "brand.400", color: "brand.200" }}
              borderRadius="4px"
              rightIcon={<ArrowForwardIcon />}
            >
              LEARN MORE
            </Button>
          </Center>
        </Box>
      </Center>

      <Center>
        <Box
          w="95%"
          position="absolute"
          top={{
            base: "98rem",
            sm: "94rem",
            md: "75rem",
            lg: "80rem",
            xl: "85rem",
          }}
        >
          <Center>
            <Box w={{ base: "90%", sm: "60%" }} pb="24px">
              <Text
                pt="30px"
                pb="30px"
                fontSize="34px"
                lineHeight="40px"
                textAlign="center"
                fontWeight="400"
                borderBottom="1px solid #4A4A4A"
              >
                CREWeek 2024 Featured Speakers
              </Text>
            </Box>
          </Center>
          <SpeakerCarousel />
          <Center>
            <Link to="/speakers">
              <Button
                marginTop="20px"
                variant="outline"
                color="brand.400"
                borderWidth="2px"
                borderColor="brand.400"
                fontSize="18px"
                fontWeight="600"
                _hover={{ bgColor: "brand.400", color: "brand.200" }}
                borderRadius="4px"
                rightIcon={<ArrowForwardIcon />}
              >
                VIEW ALL SPEAKERS
              </Button>
            </Link>
          </Center>
        </Box>
      </Center>

      <Center>
        <Grid
          position="absolute"
          top={{
            base: "140rem",
            sm: "125rem",
            md: "105rem",
            lg: "115rem",
            xl: "118rem",
          }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={4}
          w={{ base: "90%", sm: "90%", md: "90%", lg: "60%", xl: "60%" }}
          mt="5rem"
          // pb="60px"
        >
          <GridItem>
            <Image src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-burkhard-kim-16-9-1.jpg" />
            <Box bg="lightgray" pt="50px" pl="28px">
              <Text fontSize="26px" lineHeight="22px" fontWeight="600" pb="1em">
                Podcast
              </Text>
              <Text
                lineHeight="1.35"
                fontSize="16px"
                fontWeight="600"
                pr="28px"
                pb="32px"
              >
                Prepare for CERAWeek with the latest podcast hosted by Atul
                Arya, Senior Vice President & Chief Energy Strategist, S&P
                Global. In the seventh episode, S&P Global experts James R.
                Burkhard and Shin Kim discuss Navigating Supply, Demand, and
                Prices: Insights into Global Oil Markets Dynamics.
              </Text>
              <Button
                marginTop="20px"
                variant="outline"
                color="brand.400"
                borderWidth="2px"
                borderColor="brand.400"
                fontSize="18px"
                fontWeight="600"
                _hover={{ bgColor: "brand.400", color: "brand.200" }}
                borderRadius="4px"
                rightIcon={<ArrowForwardIcon />}
                mb={"28px"}
              >
                LISTEN
              </Button>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Image src="https://cdn.ihsmarkit.com/www/images/0423/ceraweek-social-media-stay-connected-rpomo-16-9.jpg" />
            <Box
              bg="lightgray"
              pt="10px"
              pl="28px"
              pb={{ base: "", sm: "", md: "84px", lg: "116px", xl: "0px" }}
            >
              <Text
                fontSize="26px"
                lineHeight="22px"
                fontWeight="600"
                pb=".5em"
              >
                Stay Connected{" "}
              </Text>
              <Text
                lineHeight="1.35"
                fontSize="16px"
                fontWeight="600"
                pr="28px"
              >
                Connect with us on social media for the latest conversations
                around CERAWeek and the Innovation Agora.
              </Text>
              <Button
                marginTop="20px"
                variant="outline"
                color="brand.400"
                borderWidth="2px"
                borderColor="brand.400"
                fontSize="18px"
                fontWeight="600"
                _hover={{ bgColor: "brand.400", color: "brand.200" }}
                borderRadius="4px"
                rightIcon={<ArrowForwardIcon />}
                mb="24px"
              >
                CONNECT
              </Button>
            </Box>
          </GridItem>
        </Grid>
      </Center>

      <Center>
        <Box
          w={{ base: "", sm: "90%", md: "60%", lg: "60%", xl: "60%" }}
          pb="24px"
          position="absolute"
          top={{
            base: "215rem",
            sm: "215rem",
            md: "150rem",
            lg: "164rem",
            xl: "169rem",
          }}
        >
          <Text
            pt="30px"
            pb="30px"
            fontSize="34px"
            lineHeight="40px"
            textAlign="center"
            fontWeight="400"
            borderBottom="1px solid #4A4A4A"
          >
            Unparalleled Thought Leadership
          </Text>
        </Box>
      </Center>

      <Box
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "block",
          xl: "block",
        }}
        position="absolute"
        top={{
          base: "",
          sm: "225rem",
          md: "160rem",
          lg: "174rem",
          xl: "178rem",
        }}
      >
        <Leadership />
      </Box>

      <Center>
        <Box
          w={{ base: "90%", sm: "90%", md: "90%", lg: "60%", xl: "60%" }}
          pb="24px"
          position="absolute"
          top={{
            base: "225rem",
            sm: "225rem",
            md: "160rem",
            lg: "178rem",
            xl: "178rem",
          }}
          display={{
            base: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          }}
        >
          {/* LastCarousel component */}
          <LastCarousel />
        </Box>
      </Center>

      <Box
        position="absolute"
        top={{
          base: "250rem",
          sm: "250rem",
          md: "200rem",
          lg: "200rem",
          xl: "210rem",
        }}
      >
        <Footer />
      </Box>
    </>
  );
};

export default Homepage;
