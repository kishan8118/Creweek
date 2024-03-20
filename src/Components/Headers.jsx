import {
  ChevronDownIcon,
  CloseIcon,
  HamburgerIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Image,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Text,
  Input,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Headers = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      position="fixed"
      top={{ base: "0", sm: "0", md: "0", lg: "2.5rem" }}
      left="0"
      right="0"
      zIndex="1000"
      boxShadow="0px 2px 10px rgba(0, 0, 0, 0.1)"
      bg="brand.200"
    >
      <Box display="flex" alignItems="center">
        <Box w={{ base: "40%", sm: "20%", md: "15%", lg: "10%", xl: "6%" }}>
          <Link to="/">
            <Image
              // w={{ base: "40%", sm: "20%", md: "20%", lg: "20%", xl: "20%" }}
              p={2}
              src={logo}
            />
          </Link>
        </Box>
        <Box
          display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
          alignItems="center"
          gap={4}
        >
          <Menu>
            <MenuButton
              as={Button}
              _expanded={{ bg: "none" }}
              bg="none"
              _hover={{ bg: "none" }}
              fontWeight="semibold"
              rightIcon={<ChevronDownIcon />}
            >
              Agenda
            </MenuButton>
            <MenuList>
              <MenuItem _hover={{ bg: "brand.300" }}>
                <Link to="/themes">2024 Themes</Link>
              </MenuItem>
              <Link to="/agenda">
                <MenuItem _hover={{ bg: "brand.300" }}>2024 Agenda</MenuItem>
              </Link>
            </MenuList>
          </Menu>
          <Text fontWeight="semibold">
            <Link to="/speakers">Speakers</Link>
          </Text>

          <Menu>
            <MenuButton
              as={Button}
              _expanded={{ bg: "none" }}
              bg="none"
              _hover={{ bg: "none" }}
              rightIcon={<ChevronDownIcon />}
              fontWeight="semibold"
            >
              Executive Conference
            </MenuButton>
            <MenuList>
              <Link to="/register">
                <MenuItem _hover={{ bg: "brand.300" }}>Register</MenuItem>
              </Link>
              <Link to="/about">
                <MenuItem _hover={{ bg: "brand.300" }}>About</MenuItem>
              </Link>
              <Link to="/speakers">
                <MenuItem _hover={{ bg: "brand.300" }}>Speakers</MenuItem>
              </Link>
              <Link to="/agenda">
                <MenuItem _hover={{ bg: "brand.300" }}>Agenda</MenuItem>
              </Link>
              <Link to="/sessions-formats">
                <MenuItem _hover={{ bg: "brand.300" }}>
                  Session Formats
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              _expanded={{ bg: "none" }}
              bg="none"
              _hover={{ bg: "none" }}
              rightIcon={<ChevronDownIcon />}
              fontWeight="semibold"
            >
              Agora
            </MenuButton>
            <MenuList>
              <Link to="/agora-register">
                <MenuItem>Register</MenuItem>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              _expanded={{ bg: "none" }}
              bg="none"
              _hover={{ bg: "none" }}
              rightIcon={<ChevronDownIcon />}
              fontWeight="semibold"
            >
              Featured Programs
            </MenuButton>
            <MenuList></MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              _expanded={{ bg: "none" }}
              bg="none"
              _hover={{ bg: "none" }}
              rightIcon={<ChevronDownIcon />}
              fontWeight="semibold"
            >
              Partnership
            </MenuButton>
            <MenuList></MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              _expanded={{ bg: "none" }}
              bg="none"
              _hover={{ bg: "none" }}
              rightIcon={<ChevronDownIcon />}
              fontWeight="semibold"
            >
              Media
            </MenuButton>
            <MenuList>
              <Link to="/news">
                <MenuItem _hover={{ bg: "brand.300" }}>In the News</MenuItem>
              </Link>
              <Link to="/press">
                <MenuItem _hover={{ bg: "brand.300" }}>Press Release</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Box>

      {/* Search */}
      {isSearchOpen ? (
        <Box position="relative" display="flex" alignItems="center">
          <Input placeholder="Search..." />
          <Button
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            onClick={handleSearchToggle}
          >
            <CloseIcon />
          </Button>
        </Box>
      ) : (
        <Button
          onClick={handleSearchToggle}
          bg="none"
          _hover={{ bg: "none" }}
          leftIcon={<SearchIcon />}
        />
      )}

      <HamburgerIcon
        onClick={onOpen}
        boxSize="2rem"
        display={{ base: "block", sm: "block", md: "block", lg: "none" }}
      />
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader> */}
          <DrawerBody>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Agenda
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link>
                    <Text pt={2} pb={2}>
                      2024 Themes
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      2024 Agenda
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      2024 Live Streams
                    </Text>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Link>
              <Text pt={2} pb={2} pl={4}>
                Speakers
              </Text>
            </Link>

            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Executive Conference
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link>
                    <Text pt={2} pb={2}>
                      Register
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      About
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Agenda
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Speakers
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Session Formats
                    </Text>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Agora
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link>
                    <Text pt={2} pb={2}>
                      Register
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      About
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Theme
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Agenda
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Speakers
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Session Formats
                    </Text>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Featured Programs
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link>
                    <Text pt={2} pb={2}>
                      Overview
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Leadership Circle
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Futture Energy Leaders
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Women in Energy, Diversity, Equity & Inclusion
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Energy Innovatio Pioneers
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Professional Development Programs
                    </Text>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Partnership
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link>
                    <Text pt={2} pb={2}>
                      Partnership Experience
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      CERAWeek Partners
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Innovation Agora Partners
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Agora Partners House
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Partners Portal
                    </Text>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Media
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Link>
                    <Text pt={2} pb={2}>
                      Podcast
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      2023 Video Gallery
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      2023 Executive Interviews
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Social Media
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      In the News
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Press Guidelines
                    </Text>
                  </Link>
                  <Link>
                    <Text pt={2} pb={2}>
                      Press Release
                    </Text>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Link>
              <Text pt={2} pb={2} pl={4}>
                REGISTER
              </Text>
            </Link>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Headers;
