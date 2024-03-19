import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { speakers } from "../speakerData";
import SpeakerCard from "../Components/SpeakerCard";
import AllSpeakersCard from "../Components/AllSpeakersCard";
import Footer from "../Components/Footer";

const Speakers = () => {
  return (
    <>
      <Box
        position="absolute"
        top={{ base: "56px", sm: "56px", md: "62px", lg: "118px", xl: "110px" }}
        left={0}
        w="100%"
        backgroundImage="url(https://cdn.ihsmarkit.com/www/images/0324/ceraweek-2024-dan-yergin-hero-blue-1.jpg)"
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
            justifyContent="end"
            mr={{ base: "0", sm: "0", md: "0", lg: "", xl: "20rem" }}
            p={{
              base: "4rem",
              sm: "10rem",
              md: "10rem",
              lg: "11rem",
              xl: "11rem",
            }}
            flexWrap="wrap"
            textAlign={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "end",
              xl: "end",
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
              fontSize="42px"
              fontWeight="bold"
            >
              CREWeek 2024 Speakers
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        bg="brand.700"
        position="absolute"
        top={{
          base: "374px",
          sm: "500px",
          md: "510px",
          lg: "510px",
          xl: "525px",
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
              lg: "22%",
              xl: "22%",
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
              <option>Industry Type</option>
              <option>Academics & Labs, Associations and NGOs</option>
              <option>Agribusiness </option>
              <option>Carbon Management </option>
              <option>Finance, Investment, Trading & Risk Management </option>
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

        <Center>
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
        </Center>
      </Box>

      <Box
        mt={3}
        position="absolute"
        top={{
          base: "1318rem",
          sm: "428rem",
          md: "485rem",
          lg: "197rem",
          xl: "203rem",
        }}
      >
        <Footer />
      </Box>
    </>
  );
};

export default Speakers;
