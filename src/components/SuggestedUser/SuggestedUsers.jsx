//import React from 'react'

import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

const SuggestedUsers = () => {
  return <VStack py={8} px={6} gap={4}>
    <SuggestedHeader />

    <Flex alignItems={"center"}  justifyContent={"space-between"} w={"full"}>
  <Text fontSize={12}
      color={"gray.500"}
      fontWeight={"bold"}>

   Suggested for you
  </Text>
  <Text fontSize={12}
      color={"blue.500"}
      fontWeight={"bold"}
      cursor={"pointer"}
      _hover={{color:"grey.400"}}>
 See All
  </Text>
    </Flex>
    <SuggestedUser name='Triangle Singh' followers={1392} avatar='https://bit.ly/triangle-singh' />
    <SuggestedUser name='Rectangle Singh' followers={567} avatar='https://bit.ly/rectangle-singh' />
    <SuggestedUser  name='Square Singh' followers={759 } avatar='https://bit.ly/square-singh'/>

    <Box 
           fontSize={12 }color={"grey.500"}  mt={5} alignSelf={"start"}>
     © 2024 Built By{" "}
     <Link href='https://github.com/@asaprogrammer_' target='_blank' color='blue.500' fontSize={14}>
        As a Programmer
     </Link>

    </Box>
  </VStack>
  
}

export default SuggestedUsers