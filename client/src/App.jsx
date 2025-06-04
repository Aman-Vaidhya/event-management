import Events from "./pages/Events"
import { Heading } from "@chakra-ui/react";

function App() {

  return (
    <>
      <Heading as="h1" size="lg" my={4} align="center">EVENTS</Heading>
      <Events />
    </>
  )
}

export default App
