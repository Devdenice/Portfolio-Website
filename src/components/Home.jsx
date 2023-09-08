import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import heroImg from "../assets/image2.png";

const Home = () => {
  return (
    <Box
      height={"100vh"}
      id="home"
      overflow={"visible"}
      w={"full"}
      position={"relative"}
    >
      <Box display={{ base: "flex", sm: "block", md: "flex" }}>
        {/* Texts */}
        <Box
          mt={{ base: "120px", sm: "0", md: "60px", lg: "120px" }}
          textAlign={{ base: "unset", sm: "center", md: "unset", lg: "unset" }}
          // justifyContent={"center"}
          // alignContent={"center"}
        >
          <Text
            fontSize={{
              base: "4xl",
              sm: "2xl",
              md: "2xl",
              lg: "4xl",
              xl: "4xl",
            }}
            mt={12}
          >
            Hello I&apos;m
          </Text>
          <Heading
            fontSize={{
              base: "5xl",
              sm: "3xl",
              md: "3xl",
              lg: "5xl",
              xl: "5xl",
            }}
          >
            Denice Pelo
          </Heading>
          <Text
            w={{
              base: "100%",
              sm: "220px",
              md: "290px",
              lg: "400px ",
              xl: "450px",
            }}
            mt={3}
            mx={{ sm: "auto" }}
            fontSize={{ base: "xl", sm: "sm", md: "sm", lg: "lg", xl: "xl" }}
            textAlign={{ sm: "justify", md: "unset" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quia
            fuga culpa voluptates odit voluptatibus neque.
          </Text>

          {/* Buttons */}

          <Box
            mt={5}
            display={{ sm: "block", md: "flex" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            width={{
              base: "100%",
              sm: "unset",
              md: "280px",
              lg: "310px",
              xl: "320px",
            }}
            mx={{ base: "unset", sm: "auto", md: "unset", lg: "unset" }}
            p={{ sm: "2", md: "unset" }}
          >
            <Button
              colorScheme={"teal"}
              variant={"solid"}
              size={{ base: "lg", sm: "sm", md: "md", lg: "lg", xl: "lg" }}
              width={{
                base: "140px",
                sm: "110px",
                md: "130px",
                lg: "140px",
                xl: "140px",
              }}
              display={{ sm: "block" }}
              mx={{ sm: "auto", md: "unset" }}
              mb={4}
            >
              About Me
            </Button>
            <Button
              colorScheme={"teal"}
              variant={"outline"}
              size={{ base: "lg", sm: "sm", md: "md", lg: "lg", xl: "lg" }}
              width={{
                base: "140px",
                sm: "110px",
                md: "130px",
                lg: "140px",
                xl: "140px",
              }}
              border={"2px"}
              display={{ sm: "block" }}
              mx={{ sm: "auto", md: "unset" }}
            >
              Projects
            </Button>
          </Box>
        </Box>
        {/* Img */}
        <Box
          w={{ sm: "80%", md: "100%" }}
          display={{ base: "unset", sm: "block", md: "flex" }}
          mx={{ base: "unset", sm: "auto", md: "unset" }}
          justifyContent={"center"}
          position={"relative"}
        >
          <Image
            src={heroImg}
            alt="Profile Image"
            display={{ base: "unset", sm: "block", md: "unset" }}
            mx={{ base: "unset", sm: "auto", md: "unset" }}
            width={{
              base: "500px",
              sm: "350px",
              md: "300px",
              lg: "450px",
              xl: "470px",
            }}
            position={{
              base: "unset",
              sm: "relative",
              md: "absolute",
              lg: "absolute",
            }}
            top={70}
            right={"0"}
            bg={"teal.500"}
            borderRadius={"300px 0px 300px 300px"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
