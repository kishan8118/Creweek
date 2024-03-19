import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const AllSpeakersCard = ({ name, img, department, position }) => {
  return (
    <Box
      w={{ base: "", sm: "", md: "", lg: "", xl: "15rem" }}
      _hover={{ cursor: "pointer", opacity: ".5" }}
      borderRadius={10}
      h="100%" // Set a fixed height for the card container
      display="flex"
      flexDirection="column"
    >
      <Image src={img} w="100%" borderTopRadius={4} />
      <Box bg="brand.200" p={3} pb={7} borderRadius={4} flexGrow={1}>
        <VStack align="stretch" spacing={2}>
          <Text fontSize="16px" fontWeight="700">
            {name}
          </Text>
          <Text fontSize="11px" fontWeight="600">
            {department}
          </Text>
          <Text fontSize="11px" fontWeight="600">
            {position}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default AllSpeakersCard;
