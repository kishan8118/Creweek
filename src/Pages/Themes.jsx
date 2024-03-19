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
import ThemeFirstCarousel from "../Components/ThemeFirstCarousel";
import Footer from "../Components/Footer";

const Themes = () => {
  return (
    <>
      <Box
        position="absolute"
        top={{ base: "56px", sm: "56px", md: "62px", lg: "118px", xl: "110px" }}
        left={0}
        w="100%"
        backgroundImage="url(https://cdn.ihsmarkit.com/www/images/0719/ceraweek-speakers-hero-dan-yergin-2.jpg)"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box
          bg="rgba(0, 0, 0, 0.2 )"
          zIndex={11111}
          w={{ base: "", sm: "100%", md: "100%", lg: "100%", xl: "100%" }}
          //   p="100px"
        >
          <Box
            display="flex"
            justifyContent="center"
            p={{
              base: "2rem",
              sm: "4rem",
              md: "4rem",
              lg: "4rem",
              xl: "4rem",
            }}
            flexWrap="wrap"
            textAlign={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "center",
            }}
          >
            <Text
              w={{
                base: "100%",
                sm: "100%",
                md: "50%",
                lg: "100%",
                xl: "100%",
              }}
              color="white"
              fontSize="54px"
              fontWeight="bold"
            >
              CREWeek 2024
            </Text>
            <Text
              w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              }}
              mb={{
                base: "",
                sm: "",
                md: "13px",
                lg: "13px",
                xl: "13px",
              }}
              color="white"
              fontSize="24px"
              fontWeight="400"
              lineHeight="28px"
            >
              Multidimensional Energy Transition: Markets, <br /> climate,
              technology and geopolitics
            </Text>
            <Button
              m="30px 15px 0px"
              rightIcon={<ArrowForwardIcon />}
              bg="white"
              fontWeight="bold"
            >
              REGISTER
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        bg="brand.300"
        position="absolute"
        top={{ base: "", sm: "", md: "410px", lg: "457px", xl: "457px" }}
        p={6}
        w="100%"
        display={{ base: "none", sm: "", md: "none", lg: "flex", xl: "flex" }}
        justifyContent="center"
      >
        <Box
          display="flex"
          w="90%"
          justifyContent="space-between"
          alignItems="center"
          fontSize="14px"
          fontWeight="600"
          lineHeight="17px"
        >
          <Text>2024 THEMES</Text>
          <Text>Energy Markets</Text>
          <Text>Policy and Geopolitics</Text>
          <Text>Company Strategies</Text>
          <Text>Power Markets in Transition</Text>
          <Text>New Supply Chains for Net Zero</Text>
          <Text>Capital Transition</Text>
          <Text>Technology and Innovation</Text>
          <Text>Climate and Sustainability</Text>
        </Box>
      </Box>

      <Box
        bg="brand.300"
        position="absolute"
        top={{
          base: "490px",
          sm: "390px",
          md: "410px",
          lg: "457px",
          xl: "457px",
        }}
        p={6}
        w="100%"
        display={{ base: "", sm: "", md: "block", lg: "none", xl: "none" }}
      >
        <ThemeFirstCarousel />
      </Box>

      <Center>
        <Box
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
            sm: "35rem",
            md: "35rem",
            lg: "40rem",
            xl: "40rem",
          }}
        >
          <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
            CERAWeek 2024 will explore the strategies for an energy world in
            rapid transformation. Foremost thought leaders, policymakers and
            executives from across energy, finance, technology, and governments
            will convene at CERAWeek 2024 for dialogue, shared learnings and
            connectivity.{" "}
          </Text>
          <Text lineHeight="1.6" mb="24px" fontSize="16px" fontWeight="500">
            What are the opportunities and risks in a world of multispeed,
            nonlinear transformation?
          </Text>
        </Box>
      </Center>

      <Center>
        <Box
          position="absolute"
          top={{
            base: "65rem",
            sm: "50rem",
            md: "50rem",
            lg: "50rem",
            xl: "50rem",
          }}
          w={{ base: "90%", sm: "90%", md: "90%", lg: "90%", xl: "60%" }}
        >
          <Box pb="30px" mb="60px" borderBottom="1px solid black">
            <Text fontSize="34px" lineHeight="40px" fontWeight="400">
              CREWeek 2024 Themes
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection={{
              base: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            gap="2rem"
            pb="25px"
            borderBottom="1px solid black"
          >
            <Box
              w={{ base: "90%", sm: "100%", md: "100%", lg: "70%", xl: "70%" }}
            >
              <Image src="https://cdn.ihsmarkit.com/www/images/0224/ceraweek-2024-themes-energy-markets-504x305-1.jpg" />
            </Box>
            <Box>
              <Text
                fontSize="20px"
                color="brand.400"
                fontWeight="700"
                lineHeight="1.4"
              >
                Energy Markets
              </Text>
              <Text mt="23px" fontSize="16px" lineHeight="1.5">
                Energy demand continues to grow globally, but what will be the
                balance between supply and demand, and how will markets and
                investment respond? How will electrification and the new
                mobility affect future demand for oil, and how will new LNG
                supplies affect the global gas market? Will volatility persist?
                Fuels and technologies for a low-carbon economy are advancing at
                different speeds. Compounding this are permitting and financing
                delays.
              </Text>
              <Button
                mt="23px"
                fontSize="18px"
                lineHeight="1.5"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="white"
                variant="outline"
                fontWeight="700"
                borderWidth="2px"
                color="brand.400"
              >
                LEARN MORE
              </Button>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection={{
              base: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            gap="2rem"
            pb="25px"
            pt="25px"
            borderBottom="1px solid black"
          >
            <Box
              w={{
                base: "90%",
                sm: "150%",
                md: "145%",
                lg: "100%",
                xl: "100%",
              }}
            >
              <Image src="https://cdn.ihsmarkit.com/www/images/0224/ceraweek-2024-themes-policy-geopolitics-504x305-1.jpg" />
            </Box>
            <Box>
              <Text
                fontSize="20px"
                color="brand.400"
                fontWeight="700"
                lineHeight="1.4"
              >
                Policy and Geopolitics
              </Text>
              <Text mt="23px" fontSize="16px" lineHeight="1.5">
                Energy security is back on the agenda. Geopolitics – wars in
                Ukraine and the Middle East, conflict in the Red Sea, rising
                tensions in Asia, Latin American and Africa – are stoking
                uncertainty across global markets. Great power competition is
                intensifying. New supply chain disruptions are emerging.
                Post-COP28, North/South divisions over global climate policy are
                evident. The outcome of these factors will shape energy security
                and access, and finance and industry strategies. Countries that
                comprise more than half of the world’s population will hold
                elections in 2024. How can companies navigate the new more
                challenging world of geopolitics?
              </Text>
              <Button
                mt="23px"
                fontSize="18px"
                lineHeight="1.5"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="white"
                variant="outline"
                fontWeight="700"
                borderWidth="2px"
                color="brand.400"
              >
                LEARN MORE
              </Button>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection={{
              base: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            gap="2rem"
            pb="25px"
            pt="25px"
            borderBottom="1px solid black"
          >
            <Box
              w={{ base: "90%", sm: "130%", md: "140%", lg: "91%", xl: "95%" }}
            >
              <Image src="https://cdn.ihsmarkit.com/www/images/0224/ceraweek-2024-themes-climate-sustainability-504x305-1.jpg" />
            </Box>
            <Box>
              <Text
                fontSize="20px"
                color="brand.400"
                fontWeight="700"
                lineHeight="1.4"
              >
                Climate and Sustainability{" "}
              </Text>
              <Text mt="23px" fontSize="16px" lineHeight="1.5">
                COP28 marked a new era as large industry players pledged to
                lower emissions and improve measurement and monitoring.
                Companies outside the energy industry are also increasingly
                setting emissions reduction targets and creating low-carbon
                products in everything from food and beverages to apparel and
                appliances. Voluntary carbon markets, corporate clean energy
                purchase, and renewable energy certificates are all gaining
                traction. What is ahead for the climate agenda? How will
                governments and industry continue to coalesce around shared
                goals and advance climate objectives?
              </Text>
              <Button
                mt="23px"
                fontSize="18px"
                lineHeight="1.5"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="white"
                variant="outline"
                fontWeight="700"
                borderWidth="2px"
                color="brand.400"
              >
                LEARN MORE
              </Button>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection={{
              base: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            gap="2rem"
            pb="25px"
            pt="25px"
            borderBottom="1px solid black"
          >
            <Box
              w={{ base: "90%", sm: "120%", md: "120%", lg: "80%", xl: "80%" }}
            >
              <Image src="https://cdn.ihsmarkit.com/www/images/0224/ceraweek-2024-themes-company-strategies-504x305-1.jpg" />
            </Box>
            <Box>
              <Text
                fontSize="20px"
                color="brand.400"
                fontWeight="700"
                lineHeight="1.4"
              >
                Company Strategies{" "}
              </Text>
              <Text mt="23px" fontSize="16px" lineHeight="1.5">
                How will businesses continue to adapt and transform to meet the
                needs of customers, reliability of supply, and the energy
                transition? Companies are pursuing a range of investment
                strategies across fuels and technologies to meet demand and, at
                the same time, position for energy transition. These range from
                balancing between molecules and electrons to consolidating to
                gain scale and flexibility; reorienting value chains; forming
                new and innovative partnerships; and reassessing incentives and
                regulatory risks.
              </Text>
              <Button
                mt="23px"
                fontSize="18px"
                lineHeight="1.5"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="white"
                variant="outline"
                fontWeight="700"
                borderWidth="2px"
                color="brand.400"
              >
                LEARN MORE
              </Button>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDirection={{
              base: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            gap="2rem"
            pb="25px"
            pt="25px"
            borderBottom="1px solid black"
          >
            <Box
              w={{
                base: "90%",
                sm: "170%",
                md: "170%",
                lg: "115%",
                xl: "120%",
              }}
            >
              <Image src="https://cdn.ihsmarkit.com/www/images/0224/ceraweek-2024-themes-power-markets-in-transition-504x305.jpg" />
            </Box>
            <Box>
              <Text
                fontSize="20px"
                color="brand.400"
                fontWeight="700"
                lineHeight="1.4"
              >
                Power Markets in Transition{" "}
              </Text>
              <Text mt="23px" fontSize="16px" lineHeight="1.5">
                The electric power sector has been at the forefront of the
                global energy transition with technologies like wind and solar
                maturing rapidly and deployed across the world. Yet renewable
                development faces new challenges in supply chain bottlenecks,
                high interest rate, siting and permitting delays, and grid
                constraints. How much faster will electricity demand grow with
                the myriad of new demand drivers such as AI and data centers,
                electric vehicles, and heat pumps? How can the power sector
                continue to decarbonize while maintaining reliability? As
                renewables expand, how will fossil fuel and renewables alike
                make money as power prices come under downward pressure? What
                will be the parameters for regulators and policymakers?
              </Text>
              <Button
                mt="23px"
                fontSize="18px"
                lineHeight="1.5"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="white"
                variant="outline"
                fontWeight="700"
                borderWidth="2px"
                color="brand.400"
              >
                LEARN MORE
              </Button>
            </Box>
          </Box>
        </Box>
      </Center>

      <Box
        position="absolute"
        top={{
          base: "310rem",
          sm: "175rem",
          md: "160rem",
          lg: "145rem",
          xl: "150rem",
        }}
      >
        <Footer />
      </Box>
    </>
  );
};

export default Themes;
