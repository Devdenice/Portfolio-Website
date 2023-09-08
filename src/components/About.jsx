import { Box, Heading, Stack, Text, Image } from "@chakra-ui/react";
import UIUX from "../assets/Experiences Icon Images/ux-design.png";
import WebDev from "../assets/Experiences Icon Images/data.png";
import MobileDev from "../assets/Experiences Icon Images/app-development.png";
import Python from "../assets/Experiences Icon Images/python.png";

const About = () => {
  const skills = [
    {
      name: "UI & UX DESIGNING",
      image: UIUX,
    },
    {
      name: "WEB DEVELOPMENT",
      image: WebDev,
    },
    {
      name: "MOBILE DEVELOPMENT",
      image: MobileDev,
    },
    {
      name: "WEB SCRAPING WITH PYTHON",
      image: Python,
    },
  ];

  return (
    <Box mt={{ sm: "170px", md: "0", lg: "0" }} id="about" height={"100vh"}>
      <Box
        w={{ sm: "80%", md: "100%" }}
        mx={"auto"}
        textAlign={{ sm: "center", md: "center", lg: "unset" }}
      >
        <Heading fontSize={{ sm: "2xl", md: "4xl", lg: "4xl" }} color={"teal"}>
          About Me
        </Heading>
        <Text
          w={{ base: "unset", sm: "100%", md: "80%", lg: "60%" }}
          pt={5}
          fontSize={{ sm: "sm", md: "unset" }}
          m={{ base: "auto", sm: "auto", md: "auto", lg: "unset" }}
          textAlign={{ sm: "justify", md: "unset" }}
        >
          Hi, my name is Denice Pelo, I am a FrontEnd Web Developer Developer
          and UI designer. i have honed my skills in Web Development and I have
          the core understanding of UI design principles. Here are the major
          skills I have.{" "}
        </Text>

        {/* Experiences Section */}
        <Stack
          direction={{ sm: "column", md: "column", lg: "row" }}
          alignItems={"center"}
          pt={2}
        >
          <Heading
            color={"teal"}
            fontSize={{ sm: "4xl", md: "5xl", lg: "8xl" }}
          >
            5+
          </Heading>
          <Text
            as={"b"}
            fontSize={{ sm: "sm", md: "md", lg: "lg" }}
            width={{ base: "unset", sm: "unset", md: "80%" }}
            textAlign={{ sm: "justify", md: "unset" }}
          >
            Years of experience.Specialised in building apps, while ensuring a
            seamless web experience for the end users.
          </Text>
        </Stack>

        <Stack
          direction={{ sm: "column", md: "row" }}
          justifyContent={"space-between"}
          pt={4}
          width={{ sm: "80%", md: "100%" }}
          mx={{ sm: "auto" }}
          mt={5}
        >
          {skills.map((skill, index) => (
            <Box
              key={index}
              p={{ sm: "5", md: "5", lg: "45px" }}
              bg={index === 0 ? "teal" : "gray"}
              _hover={{ backgroundColor: `${index === 0 ? "gray" : "teal"}` }}
            >
              <Box
                mx={{ sm: "auto", md: "unset" }}
                w={{ sm: "60px", md: "40px", lg: "60px" }}
                height={"auto"}
              >
                <Image src={skill.image} />
              </Box>
              <Box
                w={{ base: "150px", sm: "120px", md: "115px" }}
                mx={{ sm: "auto" }}
              >
                <Text as={"b"} fontSize={{ sm: "xs", md: "sm" }}>
                  {skill.name}
                </Text>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
