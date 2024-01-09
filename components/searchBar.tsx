import React from "react";
import { useEffect, useState } from "react";
import {
  StarIcon,
  Search2Icon,
  ChevronDownIcon,
  DragHandleIcon,
} from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  InputRightAddon,
  IconButton,
  Text,
  Flex,
} from "@chakra-ui/react";

const daysOfWeek = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
const monthsOfYear = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
export default function SearchBar() {
  const [selectDate, setSelectDate] = useState("");
  const [displayMode, setDisplayMode] = useState(false);
  useEffect(() => {
    const weekDay = new Date().getDay();
    const today = new Date().getDate();
    const month = new Date().getMonth();
    setSelectDate(`${daysOfWeek[weekDay]}, ${today}th ${monthsOfYear[month]}`);
  }, []);

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-around"}
      borderRadius={10}
      bg={"white"}
      h="15%"
    >
      <InputGroup w={"40%"}>
        <Input
          focusBorderColor="transparent"
          type="search"
          placeholder="Search"
          bg={"#f0f3f4"}
          borderWidth={0}
          rounded={"full"}
          size={"md"}
        />
        <InputRightAddon rounded={"full"} border={0}>
          <Search2Icon />
        </InputRightAddon>
      </InputGroup>
      <Flex alignItems={"center"} w={"25%"}>
        <Text>{selectDate}</Text>
        <IconButton
          aria-label="Open date picker"
          icon={<ChevronDownIcon />}
          bg={"transparent"}
        />
      </Flex>
      <Flex
        _hover={{
          cursor: "pointer",
        }}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          rounded={50}
          bg={displayMode ? "#f0f3f4" : "#091225"}
          w={100}
          h={10}
          zIndex={2}
          marginRight={-3}
          fontSize={12}
          color={displayMode ? "#091225" : "white"}
          onClick={() => setDisplayMode(false)}
        >
          <DragHandleIcon marginRight={1} />
          <Text marginLeft={1}>Card</Text>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          rounded={50}
          bg={displayMode ? "#091225" : "#f0f3f4"}
          w={100}
          h={10}
          zIndex={1}
          marginLeft={-3}
          fontSize={12}
          color={displayMode ? "white" : "#091225"}
          onClick={() => setDisplayMode(true)}
        >
          <StarIcon marginLeft={2} />
          <Text marginLeft={2}>List</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
