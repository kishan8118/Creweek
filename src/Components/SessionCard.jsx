import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const SessionCard = ({ image, desc, category }) => {
  return (
    <Box position="relative">
      <Image src={image} />
      <Text
        // border="1px solid red"
        p="6px 10px 6px 10px"
        position="absolute"
        top={{
          base: "140px",
          sm: "250px",
          md: "150px",
          lg: "220px",
          xl: "190px",
        }}
        left={{ base: "10px", sm: "20px", md: "20px", lg: "30px", xl: "30px" }}
        fontWeight="600"
        fontSize="18px"
        color="white"
        bg="brand.400"
      >
        {category}
      </Text>
      <Text p="67px 0px 25px" pl="28px" fontWeight="600">
        {desc}
      </Text>
    </Box>
  );
};

export default SessionCard;
