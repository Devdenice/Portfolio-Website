import { useState } from "react";
import { Box, Flex, Button, Link, Image, useColorMode } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseCircleLine } from "react-icons/ri";
import ColorModeButton from "./ColorModeButton";
import { Collapse } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import LogoLight from "../assets/Logo/Logo Portfolio Light Mode.png";
import LogoDark from "../assets/Logo/Logo Portfolio Dark Mode.png";

const Header = () => {
  const Links = [
    { name: "Home", link: "#home" },
    { name: "About me", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const [open, setOpen] = useState(false);

  const { isOpen, onToggle } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box py={"2"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"relative"}
      >
        <Box>
          <Box display={"flex"}>
            <Box mr={2}>
              {colorMode === "light" ? (
                <Image src={LogoLight} width={"60px"} />
              ) : (
                <Image src={LogoDark} width={"60px"} />
              )}
            </Box>
            <Box
              fontFamily={"'Raleway', sans-serif"}
              fontWeight={"700"}
              color={"teal"}
              fontSize={"23"}
              display={{ sm: "none", md: "block" }}
            >
              Denice
            </Box>
          </Box>
        </Box>
        <Box w={{ base: "", sm: "auto", md: "25em" }}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Box
              display={{ base: "none", sm: "none", md: "inline-block" }}
              w={"21em"}
            >
              <Box display={"flex"} justifyContent={"space-between"}>
                {Links.map((link) => (
                  <Link
                    href={link.link}
                    _hover={{ color: "teal" }}
                    key={link.name}
                    fontFamily={"'Raleway', sans-serif"}
                    fontWeight={"600"}
                    fontSize={"16"}
                  >
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Box>
            <Box onClick={() => setOpen(!open)}>
              <Button
                variant={"ghost"}
                display={{
                  base: "inline-block",
                  sm: "inline-block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                }}
                // onClick={() => setOpen(!open)}
                onClick={onToggle}
                fontSize={"23px"}
              >
                {open ? <RiCloseCircleLine /> : <GiHamburgerMenu />}
              </Button>
            </Box>
            <ColorModeButton />
          </Flex>
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box
          p="1"
          color="white"
          mt="0"
          bg="teal.500"
          rounded="md"
          shadow="md"
          display={{
            base: "block",
            sm: "block",
            md: "block",
            lg: "none",
            lx: "none",
          }}
        >
          {isOpen ? (
            <Box
              display={{ base: "block", sm: "block", md: "none", lg: "none" }}
              w={"40%"}
              m={"auto"}
            >
              {Links.map((link) => (
                <Link
                  display={"flex"}
                  flexDirection={"row"}
                  key={link.name}
                  justifyContent={"center"}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          ) : null}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Header;
