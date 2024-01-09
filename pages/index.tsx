import { Flex, Box } from "@chakra-ui/react";
import Nav from "../components/nav";
import SearchBar from "../components/searchBar";
import TaskTable from "../components/taskTable";

export default function Page() {
  return (
    <Flex
      bg={"#b5c2ca"}
      paddingY={"20px"}
      paddingX={"20px"}
      gap={6}
      h={"100vh"}
    >
      <Nav />
      <Flex direction={"column"} w={"85%"} gap={6}>
        <SearchBar />
        <TaskTable />

        <Flex gap={6} h={"40%"} justifyContent={"space-between"}>
          <Box borderRadius={10} bg={"white"} w={"full"}></Box>
          <Box borderRadius={10} bg={"white"} w={"full"}></Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
