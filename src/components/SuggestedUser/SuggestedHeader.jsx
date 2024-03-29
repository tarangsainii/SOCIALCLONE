//import React from 'react'

import { Avatar,  Flex, Link, Text } from "@chakra-ui/react"
import {Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return <Flex  justifyContent={"space-between"} alignItems={"center"} w={"full"}>
     <Flex alignItems={"center"} gap={2}>
         <Avatar name='As a Programmer' size={"1g"} src='/profile.png' />
         <Text fontSize={12} fontWeight={"bold"}>
            asaprogrammer_
     </Text>
     </Flex>
    <Link 
    as={RouterLink}
    to={"/auth"}
    fontSize={14}
      color={"blue.400"}
      fontWeight={"medium"}
      cursor={"pointer"}
      style={{textDecoration: "none"}}>

        Log out
    </Link>
  </Flex>
    
  
}

export default SuggestedHeader