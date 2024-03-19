import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const getNextWeekDates = () => {
  //     let currentDate = new Date();
  //     let nextMonday = new Date(currentDate);
  //     nextMonday.setDate(
  //       currentDate.getDate() + ((1 + 7 - currentDate.getDay()) % 7)
  //     );
  //     let nextFriday = new Date(nextMonday);
  //     nextFriday.setDate(nextMonday.getDate() + 4);
  //     return { monday: nextMonday, friday: nextFriday };
  //   };

  //   const { monday, friday } = getNextWeekDates();

  //   const formattedMonday = moment(monday).format("MMMM DD");
  //   const formattedFriday = moment(friday).format("DD, YYYY");

  return (
    <Box
      bgColor={"brand.300"}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      boxShadow="0px 2px 10px rgba(0, 0, 0, 0.1)"
      display="flex"
      justifyContent="space-between"
    >
      <Box>
        <Text
          p={1.5}
          pl={6}
          fontWeight="500"
          fontSize="sm"
          display="flex"
          alignItems="center"
        >
          CREWeek | March 18 - 22, 2024
        </Text>
      </Box>
      <Box display="flex" alignItems="center" gap={1} pr={4}>
        <Text fontWeight="bold" _hover={{ textDecoration: "underline" }}>
          <Link to="/register">REGISTER</Link>
        </Text>
        <Menu>
          <MenuButton
            as={Button}
            bg="none"
            _hover={{ bg: "none" }}
            rightIcon={<ChevronDownIcon />}
          >
            Actions
          </MenuButton>
          <MenuList textAlign="right">
            <MenuItem fontWeight="bold">About the CERAWeek</MenuItem>
            <MenuItem>Contact us</MenuItem>
            <MenuItem>CERAWeek App</MenuItem>
            <MenuItem>On-Site</MenuItem>
            <MenuItem>FAQs</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Navbar;
