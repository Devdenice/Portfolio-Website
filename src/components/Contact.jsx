import {
  Box,
  Stack,
  VStack,
  Text,
  HStack,
  Input,
  Button,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <Stack height={"50vh"} id="contact" pt={{ sm: "470px", md: "450px" }}>
      <HStack
        position={"relative"}
        m={0}
        alignItems={"none"}
        display={{ sm: "inline-block", md: "flex" }}
      >
        <Box width={{ sm: "100%", md: "50%" }} right={0}>
          <Box display={"block"} height={"120px"}>
            <Heading
              fontSize={{ sm: "2xl", md: "4xl", lg: "4xl" }}
              color={"teal"}
              mb={2}
              textAlign={{ sm: "center", md: "unset" }}
            >
              Connect with me:
            </Heading>
            <Box
              mb={2}
              fontSize={{ sm: "sm", md: "unset" }}
              textAlign={{ sm: "center", md: "unset" }}
            >
              Satisifed with me? Please contact me
            </Box>
            <HStack
              fontSize={{ sm: "15px", md: "20px" }}
              justifyContent={{ sm: "center", md: "unset" }}
            >
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
          </Box>
        </Box>
        <Box width={{ sm: "100%", md: "50%" }} right={0}>
          <Text
            fontSize={{ sm: "sm", md: "md", lg: "lg" }}
            fontWeight={"700"}
            mb={5}
            textAlign={{ sm: "center", md: "unset" }}
          >
            Contact me, let&apos;s make magic together
          </Text>
          <Box
            width={{ sm: "100%", md: "100%" }}
            display={"inline-block"}
            justifyContent={"space-between"}
            height={"200px"}
          >
            <Input
              focusBorderColor={"teal"}
              size={{ sm: "sm" }}
              mb={5}
              placeholder="Name"
            />
            <Input
              focusBorderColor={"teal"}
              size={{ sm: "sm" }}
              mb={5}
              placeholder="Email"
            />
            <Textarea
              focusBorderColor={"teal"}
              size={{ sm: "sm" }}
              mb={5}
              placeholder="Message"
            />
            <Box
              width={"50%"}
              mx={{ sm: "auto", md: "unset" }}
              alignItems={"center"}
            >
              <Button
                w={"full"}
                size={{ sm: "sm", md: "unset" }}
                colorScheme="teal"
              >
                Send{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </HStack>
    </Stack>
  );
};

export default Contact;
