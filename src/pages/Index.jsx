import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        as="nav"
        bg="blue.500"
        color="white"
        p={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Box>
          <Link as={RouterLink} to="/" p={2} color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/about" p={2} color="white">
            About
          </Link>
        </Box>
      </Flex>
      <Container
        centerContent
        maxW="container.md"
        height="calc(100vh - 64px)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;