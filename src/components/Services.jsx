import services from "../../public/dataservices.js";
import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box height={"100vh"} mt={{ sm: "480px", md: "0" }}>
      <Heading
        pt={10}
        fontSize={{ sm: "2xl", md: "4xl", lg: "4xl" }}
        color={"teal"}
        textAlign={{ sm: "center", md: "center", lg: "unset" }}
      >
        The services I offer:
      </Heading>
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={{ sm: "4", md: "5" }}
        textAlign={"center"}
        m={6}
      >
        {services.map((service) => (
          <GridItem
            key={service.id}
            border={"3px solid"}
            borderColor={service.id % 2 === 0 ? "teal" : "gray"}
            borderRadius={20}
            py={{ sm: "15px", md: "20px", lg: "30px" }}
            px={{ sm: "10px", md: "20px", lg: "30px" }}
            _hover={{ backgroundColor: service.id % 2 !== 0 ? "gray" : "teal" }}
          >
            <Image
              src={service.image}
              alt=""
              mb={3}
              width={{ sm: "40px", md: "60px" }}
              m={"auto"}
            />
            <Text fontSize={{ sm: "sm", md: "1xl" }} mb={"4"}>
              {service.name}
            </Text>
            <Text
              fontSize={{ sm: "xs", md: "md" }}
              textAlign={{ sm: "justify", md: "unset" }}
            >
              {service.description}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
