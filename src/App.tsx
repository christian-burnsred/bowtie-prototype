import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import { BowtieModal } from "./BowtieDiagram/components/BowtieModal.tsx";

function App() {
  return (
    <ChakraProvider>
      <BowtieModal />
    </ChakraProvider>
  );
}

export default App;
