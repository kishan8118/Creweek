import React, { useState } from "react";
import Footer from "../Components/Footer";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { AddIcon, ArrowForwardIcon, MinusIcon } from "@chakra-ui/icons";
import RegisterCarousel from "../Components/RegisterCarousel";
import AgoraRegisterCarousel from "../Components/AgoraRegisterCarousel";

const AgoraRegisterPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Box
        // border="1px solid red"
        position="absolute"
        top={{ base: "56px", sm: "56px", md: "62px", lg: "118px", xl: "110px" }}
        left={0}
        w="100%"
        backgroundImage="url(https://cdn.ihsmarkit.com/www/images/1022/ceraweek-registration-page-hero-2.jpg)"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box
          bg="rgba(0, 0, 0, 0.4)"
          zIndex={11111}
          //   w={{ base: "", sm: "", md: "100%", lg: "100%", xl: "100%" }}
          p="41px"
        >
          <Box
            color="white"
            ml={{ base: "", sm: "", md: "7rem", lg: "7rem", xl: "22rem" }}
            // border="1px solid red"
            w={{ base: "", sm: "", md: "50%", lg: "40%", xl: "30%" }}
          >
            <Text fontSize="42px" fontWeight={700} lineHeight="48px" mb="13px">
              Register for the Innovation Agora{" "}
            </Text>
            <Text
              fontWeight="400"
              mb="13px"
              lineHeight="28px"
              fontSize={"24px"}
            >
              March 18 - 22, 2024 | Houston, TX
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
          //   border="1px solid red"
          position="absolute"
          top={{
            base: "520px",
            sm: "390px",
            md: "400px",
            lg: "450px",
            xl: "468px",
          }}
          w={{ base: "90%", sm: "90%", md: "90%", lg: "80%", xl: "64%" }}
          pt="30px"
        >
          <Text letterSpacing="1px" lineHeight="1.6" mb="24px">
            The Agora fosters the energy innovation ecosystem and advances
            solutions to the world’s greatest energy and sustainability
            challenges. The Agora is the premier global marketplace for ideas,
            dialogue, new experiences, and connections. This exciting community
            of startups, technologists, investors, academics, energy companies,
            and government officials are all dedicated to shared learning and
            exploration.
          </Text>
          <Text fontWeight="bold" fontSize="16px" mb="16px">
            An Innovation Agora pass includes access to the Innovation Agora
            only
          </Text>
          <Text mb="24px">Fee $1,750 </Text>
          <Button
            rightIcon={<ArrowForwardIcon />}
            bg="brand.600"
            color="white"
            fontWeight="bold"
            fontSize="18px"
            borderRadius="4px"
            _hover={{ backgroundColor: "blue.600" }}
            mb="20px"
            mt="10px"
          >
            REGISTER
          </Button>
          <Text pt="30px" lineHeight="1.6" marginBottom="24px" fontSize="18px">
            Please note that any onsite registrations will be subject to
            compliance screening which may delay badge pick up to at least 15
            minutes. Any onsite registrations must be completed by oneself via
            your own mobile device or laptop.
          </Text>
          <Center>
            <Button
              variant="outline"
              borderWidth="2px"
              borderColor="brand.400"
              color="brand.400"
              _hover={{ backgroundColor: "brand.600", color: "brand.200" }}
              rightIcon={<ArrowForwardIcon />}
              m="10px 20px 10px 0px"
              fontSize={{
                base: "10px",
                sm: "20px",
                md: "20px",
                lg: "20px",
                xl: "20px",
              }}
              // h={{ base: "100px", sm: "", md: "", lg: "", xl: "20px" }}
            >
              EXECUTIVE CONFERENCE REGISTRATION DETAILS{" "}
            </Button>
          </Center>
        </Box>
      </Center>

      <Center>
        <SimpleGrid
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          }}
          columns={3}
          position="absolute"
          top="60rem"
          w={{ base: "", sm: "", md: "", lg: "80%", xl: "64%" }}
        >
          {/* first */}
          <Box>
            <Image
              src="https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-88-speaker-grid-SIB-2.jpg"
              position="relative"
              w="100%"
              h="100%"
              objectFit="cover"
              filter={"brightness(80%)"}
              _hover={{ filter: "brightness(60%)", cursor: "pointer" }}
            />

            <Box
              //   border="1px solid red"
              w={{ base: "", sm: "", md: "", lg: "33%", xl: "30%" }}
              position="absolute"
              top={{ base: "", sm: "", md: "", lg: "164px", xl: "250px" }}
              p="50px"
              color="brand.200"
            >
              <Text
                fontSize="22px"
                fontWeight="500"
                lineHeight="26px"
                mt="15px"
              >
                CREWeek 2024
              </Text>
              <Text
                fontSize="16px"
                fontWeight="500"
                lineHeight="20px"
                mt="20px"
              >
                Multidimensional Energy Transition: Markets, climate, technology
                and geopolitics
              </Text>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg="white"
                fontWeight="bold"
                mt="20px"
              >
                THEMES
              </Button>
            </Box>
          </Box>

          {/* Second */}

          <Box>
            <Image
              position="relative"
              w="100%"
              h="100%"
              objectFit="cover"
              filter={"brightness(80%)"}
              _hover={{ filter: "brightness(60%)", cursor: "pointer" }}
              src="https://cdn.ihsmarkit.com/www/images/0224/ceraweek-2024-agora-agenda-SIB-2.jpg"
            />
            <Box
              //   border="1px solid red"
              w={{ base: "", sm: "", md: "", lg: "33%", xl: "30%" }}
              position="absolute"
              top={{ base: "", sm: "", md: "", lg: "164px", xl: "250px" }}
              p="50px"
              color="brand.200"
            >
              <Text
                fontSize="22px"
                fontWeight="500"
                lineHeight="26px"
                mt="15px"
              >
                Speakers
              </Text>
              <Text
                fontSize="16px"
                fontWeight="500"
                lineHeight="20px"
                mt="20px"
              >
                Global leaders, policymakers and executives from across the
                energy spectrum
              </Text>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg="white"
                fontWeight="bold"
                mt="20px"
              >
                VIEW ALL SPEAKERS
              </Button>
            </Box>
          </Box>

          {/* Third */}
          <Box>
            <Image
              position="relative"
              w="100%"
              h="100%"
              objectFit="cover"
              filter={"brightness(80%)"}
              _hover={{ filter: "brightness(60%)", cursor: "pointer" }}
              src="https://cdn.ihsmarkit.com/www/images/0423/ceraweek-2023-agora-ondemand-1-SIB-2.jpg"
            />
            <Box
              w={{ base: "", sm: "", md: "", lg: "33%", xl: "30%" }}
              position="absolute"
              top={{ base: "", sm: "", md: "", lg: "164px", xl: "250px" }}
              p="50px"
              color="brand.200"
            >
              <Text
                fontSize="22px"
                fontWeight="500"
                lineHeight="26px"
                mt="15px"
              >
                Conference Agenda{" "}
              </Text>
              <Text
                fontSize="16px"
                fontWeight="500"
                lineHeight="20px"
                mt="20px"
              >
                See all CERAWeek has to offer. New sessions added regularly.
              </Text>
              <Button
                rightIcon={<ArrowForwardIcon />}
                bg="white"
                fontWeight="bold"
                mt="25px"
              >
                VIEW AGENDA
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Center>

      <Center>
        <Box
          w={{ base: "100%", sm: "100%", md: "100%", lg: "60%", xl: "60%" }}
          pb="24px"
          position="absolute"
          top={{
            base: "90rem",
            sm: "60rem",
            md: "60rem",
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
          <AgoraRegisterCarousel />
        </Box>
      </Center>

      <Center>
        <Box
          w={{ base: "96%", sm: "96%", md: "96%", lg: "80%", xl: "65%" }}
          textAlign="left"
          position="absolute"
          top={{
            base: "120rem",
            sm: "120rem",
            md: "100rem",
            lg: "93rem",
            xl: "95rem",
          }}
          borderBottom="1px solid black"
        >
          <Text fontSize="34px" lineHeight="40px" fontWeight="400" pb="25px">
            CREWeek 2024 FAQs
          </Text>
        </Box>
        <Accordion
          allowMultiple
          position="absolute"
          top={{
            base: "127rem",
            sm: "124rem",
            md: "104rem",
            lg: "97rem",
            xl: "99rem",
          }}
          w={{ base: "", sm: "96%", md: "96%", lg: "80%", xl: "65%" }}
        >
          <AccordionItem pl={0} pt={4} pb={4}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton onClick={toggleAccordion}>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      pl={4}
                      fontWeight={700}
                      textAlign="left"
                    >
                      What is the date and location of the conference?
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} hidden={!isExpanded}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem pl={0} pt={4} pb={4}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton onClick={toggleAccordion}>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      pl={4}
                      textAlign="left"
                      fontWeight={700}
                    >
                      Where can I find agenda details?{" "}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} hidden={!isExpanded}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem pl={0} pt={4} pb={4}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton onClick={toggleAccordion}>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                    <Box
                      as="span"
                      flex="1"
                      pl={4}
                      textAlign="left"
                      fontWeight={700}
                    >
                      How can I become a CERAWeek Partner?{" "}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} hidden={!isExpanded}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Button
          position="absolute"
          top={{
            base: "155rem",
            sm: "140rem",
            md: "120rem",
            lg: "113rem",
            xl: "115rem",
          }}
          left={{ base: "5", sm: "5", md: "5", lg: "9rem", xl: "21rem" }}
          variant="link"
          rightIcon={<ArrowForwardIcon />}
          bg="white"
          color={"red"}
          fontSize="18px"
          _hover={{ color: "darkred" }}
          fontWeight="600"
          mt="25px"
        >
          VIEW ALL FAQs
        </Button>
      </Center>

      <Box
        mt={3}
        position="absolute"
        top={{
          base: "160rem",
          sm: "145rem",
          md: "125rem",
          lg: "116rem",
          xl: "120rem",
        }}
      >
        <Footer />
      </Box>
    </>
  );
};

export default AgoraRegisterPage;
