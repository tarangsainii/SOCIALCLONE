import { Box, Container, Flex } from '@chakra-ui/react';
import FeedPosts from "../../components/FeedPosts/Feedposts";
//import React from 'react';

const HomePage = () => {
  return (
  <Container  maxW={"container.1g"} >
  <Flex gap={20}>
    <Box flex={2} py={10} border={"1px solid blue"}>
      < FeedPosts />
    </Box>
    <Box flex={3} mr={20}
    display={{base:"none", lg:"block"}}
    maxW={"300px"}
    border={"1px solid red"}
    >
      Suggested Users
    </Box>
  </Flex>

  </Container>
  );
};

export default HomePage;