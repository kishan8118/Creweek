import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const SpeakerCard = ({ name, img, department, position }) => {
  return (
    <Box
      w={{ base: "", sm: "", md: "", lg: "", xl: "15rem" }}
      _hover={{ cursor: "pointer", opacity: ".5" }}
    >
      <Image src={img} w="100%" />
      <Box bgColor="lightgray" p={3} pb={7}>
        <Text fontSize="16px" fontWeight="700" marginBottom="2px">
          {name}
        </Text>
        <Text fontSize="11px" fontWeight="600">
          {department}
        </Text>
        <Text fontSize="11px" fontWeight="600">
          {position}
        </Text>
      </Box>
    </Box>
  );
};

export default SpeakerCard;
