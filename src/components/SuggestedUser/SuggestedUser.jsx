//import React from 'react'

import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react"
import { useState } from "react"

const SuggestedUser = ({followers,name,avatar}) => {
    const [isFollowed, setIsFollowed] = useState(false)
  return (
    <Flex  justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex>
 <Avatar src={avatar }  name={name} size={"md"} />

     <VStack spacing={2} alignItems={"flex-start"}>
   <Box fontSize={12}
      //color={"blue.400"}
      fontWeight={"bold"}>
  {name}
   </Box>
   <Box fontSize={11}
      color={"grey.500"}
      //fontWeight={"bold"}
      >
  {followers} followers 
   </Box>
     </VStack>
        </Flex>
        <Button
        fontSize={13}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{color:"white"}}
        onClick={() => setIsFollowed(!isFollowed )}
        >
        {isFollowed ? "Unfollow" : "Follow"}
        </Button>
    </Flex>
  )
}

export default SuggestedUser