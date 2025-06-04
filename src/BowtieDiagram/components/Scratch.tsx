import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const MorphingBoxes = () => {
  const [isMorphed, setIsMorphed] = useState(false);

  return (
    <Box p={8} bg="gray.100" minH="100vh">
      <Box maxW="4xl" mx="auto">
        <Button
          mb={6}
          px={6}
          py={3}
          bg="blue.500"
          color="white"
          borderRadius="lg"
          _hover={{ bg: "blue.600" }}
          onClick={() => setIsMorphed((prev) => !prev)}
        >
          {isMorphed ? "Split Boxes" : "Fuse Boxes"}
        </Button>

        {/* Main Morphing Area */}
        <Box
          w="100%"
          h="24rem"
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          p={4}
          overflow="hidden"
        >
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="space-between"
            position="relative"
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
                zIndex: 1,
                transitionProperty: "all",
              }}
            >
              <Text transition="opacity 0.3s" opacity={isMorphed ? 0 : 1}>
                Box 1
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
                zIndex: 1,
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
                opacity: isMorphed ? 1 : 0,
                zIndex: 99,
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
