import { HStack, Stack, Text, Box } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Stack
      pt={{ sm: "450px", md: "350px" }}
      pb={9}
      alignItems={{ sm: "center", md: "unset" }}
    >
      <HStack
        justifyContent={"space-between"}
        mb={3}
        display={{ sm: "inline-block", md: "flex" }}
        textAlign={{ sm: "center" }}
        fontSize={{ sm: "sm", md: "13px" }}
      >
        <Text>@ Copyright {currentYear} | Denice Pelo</Text>
        <Text>FrontEnd Developer</Text>
        <Text>UI Designer</Text>
        <Text>Data Analyst</Text>
        <Text>Designed by @exmaple.com</Text>
      </HStack>
      <HStack fontSize={{ sm: "15px", md: "20px" }}>
        <Box>
          <FaFacebook />
        </Box>
        <Box>
          <FaInstagram />
        </Box>
        <Box>
          <FaGithub />
        </Box>
        <Box>
          <FaLinkedin />
        </Box>
      </HStack>
    </Stack>
  );
};

export default Footer;
