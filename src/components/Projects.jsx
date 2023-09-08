import { Box, Text, Heading, Grid, GridItem, Button } from "@chakra-ui/react";

const Projects = () => {
  const projects = [
    {
      title: "Twinder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante id mauris scelerisque pulvinar. Ut id massa dictum mauris lobortis semper.  ",
      image: "Insert Picture of the Project",
    },
    {
      title: "Twinder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante id mauris scelerisque pulvinar. Ut id massa dictum mauris lobortis semper.  ",
      image: "Insert Picture of the Project",
    },
    {
      title: "Twinder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet ante id mauris scelerisque pulvinar. Ut id massa dictum mauris lobortis semper.  ",
      image: "Insert Picture of the Project",
    },
  ];

  return (
    <Box
      id="projects"
      height={"100vh"}
      mt={{ sm: "640px", md: "0" }}
      textAlign={{ sm: "center", md: "unset" }}
    >
      <Heading
        pt={10}
        fontSize={{ sm: "2xl", md: "4xl", lg: "4xl" }}
        color={"teal"}
      >
        Featured Projects:
      </Heading>
      <Text
        w={{ base: "unset", sm: "80%", md: "80%", lg: "60%" }}
        pt={{ sm: "6", md: "5" }}
        fontSize={{ sm: "sm", md: "unset" }}
        m={{ base: "auto", sm: "auto", md: "unset", lg: "unset" }}
        textAlign={{ sm: "justify", md: "unset" }}
      >
        I have worked on many projects over of being a Web Developer, here are a
        few of my live projects.
      </Text>

      {/* Featured Projects */}
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        // templateColumns={"repeat(3, 1fr)"}
        gap={{ sm: "5", md: "7" }}
        pt={{ sm: "1", md: "6" }}
        m={{ sm: "5", md: "10" }}
      >
        {projects.map((project, index) => (
          <GridItem
            key={index}
            p={{ sm: "3", md: "10" }}
            border={"2px solid black"}
            bg={"blue.100"}
          >
            <Box mb={2}>{project.image}</Box>
            <Box mb={2} color={"teal"} fontSize={{ sm: "lg" }}>
              {project.title}
            </Box>
            <Box
              mb={4}
              textAlign={{ sm: "justify", md: "unset" }}
              fontSize={{ sm: "xs", md: "md" }}
            >
              {project.description}
            </Box>
            <Box
              display={"flex"}
              w={{ sm: "150px", md: "180px" }}
              justifyContent={"space-between"}
              m={{ sm: "auto", md: "auto" }}
            >
              <Button variant={"solid"} colorScheme="teal" size={"sm"}>
                About
              </Button>
              <Button variant={"outline"} colorScheme="teal" size={"sm"}>
                Project
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
