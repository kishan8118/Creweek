import { ArrowForwardIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Agenda = () => {
  return (
    <>
      <Box
        // border="1px solid red"
        position="absolute"
        top={{
          base: "10px",
          sm: "78px",
          md: "80px",
          lg: "118px",
          xl: "110px",
        }}
        left={0}
        w="100%"
        backgroundImage="url(https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-agenda-page-hero-1.jpg)"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Box
          bg="rgba(0, 0, 0, 0.2)"
          zIndex={11111}
          //   w={{ base: "", sm: "", md: "50%", lg: "40%", xl: "3%" }}
          p="60px"
        >
          <Box
            ml={{ base: "", sm: "", md: "8rem", lg: "10rem", xl: "22rem" }}
            color="brand.200"
            w={{ base: "", sm: "", md: "50%", lg: "40%", xl: "32%" }}
            pt={{ base: "0px", sm: "41px", md: "0px", lg: "", xl: "" }}
            pb={{ base: "0px", sm: "41px", md: "0px", lg: "", xl: "" }}
          >
            <Text fontSize="42px" lineHeight="48px" mb="13px">
              2024 Agenda{" "}
            </Text>
            <Text fontSize="24px" lineHeight="22px" pb="15px" fontWeight="600">
              See all CERAWeek has to offer. New sessions added regularly.
            </Text>
            <Box display="flex" flexDirection="column">
              <Button
                w="-webkit-fit-content"
                m="30px 30px 30px 0px"
                rightIcon={<ArrowForwardIcon />}
                bg="white"
                fontWeight="bold"
              >
                REGISTER
              </Button>
              <Button
                // m="30px 30px 30px 0px"
                w="-webkit-fit-content"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="white"
                variant="outline"
                fontWeight="bold"
              >
                CREWeek 2024 PHOTOS
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        bg="brand.700"
        position="absolute"
        top={{
          base: "374px",
          sm: "500px",
          md: "460px",
          lg: "500px",
          xl: "480px",
        }}
        w="100%"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          alignItems="center"
          p={4}
        >
          <Box
            display="flex"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            gap={5}
            w={{
              base: "100%",
              sm: "100%",
              md: "80%",
              lg: "50%",
              xl: "39%",
            }}
          >
            <Select bg="brand.200" boxShadow="lg">
              <option>Programe Type</option>
              <option>Executive Conference </option>
              <option>Innovation Agora </option>
              <option>Finix196</option>
              <option>Agora Pod</option>
            </Select>
            <Select bg="brand.200" boxShadow="lg">
              <option>Sessions Type</option>
              <option>Academics & Labs, Associations and NGOs</option>
              <option>Agribusiness </option>
              <option>Carbon Management </option>
              <option>Finance, Investment, Trading & Risk Management </option>
            </Select>
            <Select bg="brand.200" boxShadow="lg">
              <option>Sessions Theme</option>
              <option>Capital Transition</option>
              <option>Policy & Geopolitics</option>
              <option>Technology & Innovation</option>
              <option>Company Strategies</option>
              <option>Energy Markets</option>
              <option>Climate & Sustainability</option>
              <option>New Supply Chains for Net Zero</option>
            </Select>
            <Select bg="brand.200" boxShadow="lg">
              <option>Sort</option>
              <option>A - Z</option>
              <option>Z - A</option>
            </Select>
          </Box>

          <InputGroup
            display={{
              base: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            }}
            size="md"
            mt={4}
          >
            <Input
              borderWidth="2px"
              borderColor="brand.400"
              pr="4.5rem"
              type="text"
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Search2Icon boxSize="20px" />
            </InputRightElement>
          </InputGroup>
          <Box
            backgroundColor="#004a72"
            p={3}
            borderRadius={6}
            display={{
              base: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            }}
          >
            <Search2Icon color="white" boxSize="20px" />
          </Box>
        </Box>

        {/* <Center>
          <Grid
            mb="8rem"
            w={{
              base: "90%",
              sm: "95%",
              md: "95%",
              lg: "98%",
              xl: "98%",
            }}
            templateColumns={{
              base: "",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(7, 1fr)",
              xl: "repeat(7, 1fr)",
            }}
            rowGap={6}
            gap={6}
            mt={4}
          >
            {speakers.map((el, i) => (
              <GridItem key={i}>
                <AllSpeakersCard
                  name={el.name}
                  img={el.image}
                  department={el.department}
                  position={el.position}
                />
              </GridItem>
            ))}
          </Grid>
        </Center> */}
      </Box>
    </>
  );
};

export default Agenda;
