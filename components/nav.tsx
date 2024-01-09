import {
  Avatar,
  AvatarBadge,
  Divider,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Image from "next/image";

export default function Nav() {
  const navTabs = [
    "Dashboard",
    "Projects",
    "Task list",
    "Services",
    "Notifications",
    "Chat",
  ];
  const navLinks = navTabs.map((e: string) => {
    return (
      <Flex
        as={Link}
        href=""
        isExternal
        bg={"#f0f3f4"}
        borderRadius={50}
        w={170}
        textAlign={"left"}
        fontSize={14}
        paddingY={2}
        paddingLeft={2}
        align="center"
        color={"#091225"}
        _hover={{
          background: "#091225",
          color: "white",
          textDecoration: "none",
        }}
        _groupHover={{
          color: "white",
        }}
      >
        <StarIcon boxSize={4} />
        <Text marginLeft={2}>{e}</Text>
      </Flex>
    );
  });

  return (
    <Flex
      paddingY={5}
      borderRadius={10}
      bg={"#f0f3f4"}
      w={250}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      h={"100%"}
      minH={500}
    >
      <Flex direction={"column"} maxW={170}>
        <Image src="/logo1.png" alt="logo" width={120} height={120} />
        <Divider
          width={190}
          alignSelf={"center"}
          marginTop={4}
          marginBottom={2}
          borderColor="grey"
        />
        {navLinks}
      </Flex>
      <Flex direction={"column"} alignItems={"center"}>
        <Avatar marginBottom={4}>
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <Text marginBottom={1} fontSize={16} fontWeight={900}>
          Léopold van der Elst
        </Text>
        <Text fontSize={11} fontWeight={400}>
          Full Stack Developer
        </Text>
      </Flex>
    </Flex>
  );
}
