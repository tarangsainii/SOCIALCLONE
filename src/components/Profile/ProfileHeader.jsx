// import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react'
// //import React from 'react'

// const ProfileHeader = () => {
//   return (
//     <Flex gap={{base:4,sm:10}} py={10} direction={ {base:"column",sm:"row"}}>
// <AvatarGroup 
//  size={{base:"x1",md:"2x1"}}
//  justifySelf={"center"}
//  alignSelf={"flex-start"}

//  mx={"auto"}
//  my ={-30}
// >
// <Avatar width={200} height={200} name='As a Programmer' src="/profilepic.png" alt="As a programmer logo"/>
// </AvatarGroup>
// <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
// <Flex gap={4} direction={{base:"column", sm:"row"}}
//    justifyContent={{base:"center",sm:"flex-start" }}
//    alignItems={"center"}
//    w={"full"}

// >
// <Text fontSize={{base:"sm",md:"1g"}} >asaprogrammer_</Text>
// <Flex gap={4} alignItems={"center"} justifyContent={"center"} >
//   <Button bg={"white"} color={"black"}  _hover={{bg:"whiteAlpha.800"}} size={{base:"xs",md:"sm"}}> 
//     Edit Profile
//   </Button>

// </Flex>
// </Flex>
// <Flex alignItems={"center"} gap={{base:2,sm:4}}>
//   <Text fontSize={{base:"xs",md:"sm"}}  > 
//     <Text as="span" fontWeight={"bold"} mr={1}>4</Text>
//     Posts 
//   </Text>
//   <Text fontSize={{base:"xs",md:"sm"}}> 
//     <Text as="span" fontWeight={"bold"} mr={1}>149</Text>
//     Followers 
//   </Text>
//   <Text fontSize={{base:"xs",md:"sm"}}> 
//     <Text as="span" fontWeight={"bold"} mr={1}>175</Text>
//     Following 
//   </Text>
// </Flex>
// <Flex alignItems={"center"} gap={4}>
//    <Text  fontSize={"sm"} fontWeight={"bold"}> As a Programmer</Text>
// </Flex>
// <Text  fontSize={"sm"} > Level up your skills</Text>
// </VStack>
//     </Flex>
//   )
// }

// export default ProfileHeader

import { Avatar, AvatarGroup, Button, Flex, Text, VStack, useDisclosure } from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import useFollowUser from "../../hooks/useFollowUser";
import EditProfile from './EditProfile';

const ProfileHeader = () => {
	const { userProfile } = useUserProfileStore();
	const authUser = useAuthStore((state) => state.user);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(userProfile?.uid);
	const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username;
	const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;

	return (
		<Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
			<AvatarGroup size={{ base: "xl", md: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
				<Avatar src={userProfile.profilePicURL} alt='As a programmer logo' />
			</AvatarGroup>

			<VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
				<Flex
					gap={4}
					direction={{ base: "column", sm: "row" }}
					justifyContent={{ base: "center", sm: "flex-start" }}
					alignItems={"center"}
					w={"full"}
				>
					<Text fontSize={{ base: "sm", md: "lg" }}>{userProfile.username}</Text>
					{visitingOwnProfileAndAuth && (
						<Flex gap={4} alignItems={"center"} justifyContent={"center"}>
							<Button
								bg={"white"}
								color={"black"}
								_hover={{ bg: "whiteAlpha.800" }}
								size={{ base: "xs", md: "sm" }}
								onClick={onOpen}
							>
								Edit Profile
							</Button>
						</Flex>
					)}
					{visitingAnotherProfileAndAuth && (
						<Flex gap={4} alignItems={"center"} justifyContent={"center"}>
							<Button
								bg={"blue.500"}
								color={"white"}
								_hover={{ bg: "blue.600" }}
								size={{ base: "xs", md: "sm" }}
								onClick={handleFollowUser}
								isLoading={isUpdating}
							>
								{isFollowing ? "Unfollow" : "Follow"}
							</Button>
						</Flex>
					)}
				</Flex>

				<Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
					<Text fontSize={{ base: "xs", md: "sm" }}>
						<Text as='span' fontWeight={"bold"} mr={1}>
							{userProfile.posts.length}
						</Text>
						Posts
					</Text>
					<Text fontSize={{ base: "xs", md: "sm" }}>
						<Text as='span' fontWeight={"bold"} mr={1}>
							{userProfile.followers.length}
						</Text>
						Followers
					</Text>
					<Text fontSize={{ base: "xs", md: "sm" }}>
						<Text as='span' fontWeight={"bold"} mr={1}>
							{userProfile.following.length}
						</Text>
						Following
					</Text>
				</Flex>
				<Flex alignItems={"center"} gap={4}>
					<Text fontSize={"sm"} fontWeight={"bold"}>
						{userProfile.fullName}
					</Text>
				</Flex>
				<Text fontSize={"sm"}>{userProfile.bio}</Text>
			</VStack>
			{isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
		</Flex>
	);
};

export default ProfileHeader; 
