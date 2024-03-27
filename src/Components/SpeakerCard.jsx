import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const SpeakerCard = ({ name, img, department, position }) => {
  return (
    <Box
      w={{ base: "100%", sm: "95%", md: "95%", lg: "95%", xl: "18rem" }}
      _hover={{ cursor: "pointer", opacity: ".5" }}
      marginRight={{ base: "1rem", md: "2rem" }}
    >
      <Image src={img} borderTopRadius="6px" />
      <Box bgColor="lightgray" borderBottomRadius="6px" p={3} pb={7}>
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
