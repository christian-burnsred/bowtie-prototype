import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const MorphingBoxes = () => {
  const [isMorphed, setIsMorphed] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMorph = () => {
    setIsMorphed((prev) => {
      // Hide overlay when reversing
      if (prev) setShowOverlay(false);
      return !prev;
    });
  };

  return (
    <Box bg="white" minH="100vh">
      <Box maxW="4xl" p="auto">
        <Button onClick={handleMorph} colorScheme="blue" variant="solid" mb={6}>
          {isMorphed ? "Split Boxes" : "Fuse Boxes"}
        </Button>

        {/* Main Morphing Area */}
        <Box w="100%" h="300px" bg="white" borderRadius="lg" boxShadow="lg">
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="space-between"
            position="relative"
            bg={"orange.100"}
          >
            {/* Left Box */}
            <Box
              bg="palevioletred"
              borderRadius="lg"
              boxShadow="md"
              color="white"
              fontWeight="bold"
              fontSize="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="all 1s ease-in-out"
              sx={{
                width: isMorphed ? "100%" : "20%",
                height: "100%",
                transitionProperty: "all",
              }}
              onTransitionEnd={() => {
                if (isMorphed) setShowOverlay(true);
              }}
            >
              <Text transition="opacity 0.3s" opacity={isMorphed ? 0 : 1}>
                Box 1
              </Text>
            </Box>

            {/* DEM Node */}
            <Box
              bg="yellowgreen"
              borderRadius="lg"
              boxShadow="md"
              color="white"
              fontWeight="bold"
              fontSize="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="absolute"
              transition="all 1s ease-in-out"
              sx={{
                width: isMorphed ? "100px" : "150px",
                height: isMorphed ? "100px" : "150px",
                // When not morphed: position in center of flex container
                top: isMorphed ? "0" : "50%",
                left: isMorphed ? "50%" : "50%",
                transform: isMorphed
                  ? "translate(-50%, -50%)"
                  : "translate(-50%, -50%)",
                zIndex: 2,
                transitionProperty: "all",
                transitionDuration: "0.5s",
                borderRadius: "full",
              }}
              onTransitionEnd={() => {
                if (isMorphed) setShowOverlay(true);
              }}
            >
              <Text transition="all 0.3s ease">
                {isMorphed ? "D" : "DEM Node"}
              </Text>
            </Box>

            {/* Right Box */}
            <Box
              bg="skyblue"
              borderRadius="lg"
              boxShadow="md"
              color="white"
              fontWeight="bold"
              fontSize="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
              transition="all 1s ease-in-out"
              sx={{
                width: isMorphed ? "100%" : "20%",
                height: "100%",
                transitionProperty: "all",
              }}
            >
              <Text transition="opacity 0.3s" opacity={isMorphed ? 0 : 1}>
                Box 2
              </Text>
            </Box>

            {/* Overlay for Fused Box */}
            <Box
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              borderRadius="lg"
              bg="violet"
              boxShadow="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              fontWeight="bold"
              fontSize="3xl"
              pointerEvents="none"
              transition="all 0.5s ease-in-out"
              sx={{
                opacity: showOverlay ? 1 : 0,
              }}
            >
              <Text
                transition="all 0.3s ease"
                sx={{
                  opacity: isMorphed ? 1 : 0,
                  transform: isMorphed ? "scale(1)" : "scale(0.75)",
                  transitionDelay: isMorphed ? "0.6s" : "0s",
                }}
              >
                Fused Box
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default MorphingBoxes;
