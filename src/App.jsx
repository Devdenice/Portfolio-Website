import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Stack } from "@chakra-ui/react";
import Services from "./components/Services";
function App() {
  return (
    <Stack
      width={{ base: "85%", sm: "85%", md: "85%", lg: "90%", xl: "90%" }}
      margin={"auto"}
    >
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </Stack>
  );
}

export default App;
