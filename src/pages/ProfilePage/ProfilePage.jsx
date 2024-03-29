import { Container, Flex } from '@chakra-ui/react'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileTabs from '../../components/Profile/ProfileTabs'
import ProfilePosts from '../../components/Profile/ProfilePosts'
//import React from 'react'

const ProfilePage = () => {
  return (
    <Container maxW="container.1g" py={5}>
    <Flex
     py={10}
     px={4}
     p1={{base:4,md:10}}
     w={"full"}
     mx={"auto"}
     flexDirection={"column"}
    >
        <ProfileHeader />
        </Flex>
        <Flex 
        px={{base:2,sm:4}}
        maxW={"full"}
        mx={"auto"}
        borderTop={"1px solid"}
        borderColor={"whiteAlpha.300"}
        direction={"column"}
        >
           < ProfileTabs />
            <ProfilePosts />
    </Flex>

    </Container>
  )
}

export default ProfilePage