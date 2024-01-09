import React from "react";
import {
  Box,
  Divider,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function TaskTable() {
  return (
    <Box borderRadius={10} bg={"white"} h="45%" overflow={"auto"} p={6}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Text fontSize={24} fontWeight={800}>
            Last Tasks
          </Text>
          <Flex>
            <Text lineHeight={"50px"} fontSize={16} fontWeight={700}>
              117 total,
            </Text>
            <Text
              marginLeft={"2px"}
              lineHeight={"52px"}
              fontSize={12}
              fontWeight={700}
              color={"grey"}
            >
              proceed to resolve them
            </Text>
          </Flex>
        </Box>
        <Flex h={"80px"} alignItems={"center"}>
          <Flex direction={"column"} alignItems={"center"} w={100}>
            <Text
              marginLeft={"2px"}
              lineHeight={"52px"}
              fontSize={24}
              fontWeight={800}
              color={"grey"}
            >
              94
            </Text>
            <Text
              marginLeft={"2px"}
              lineHeight={"52px"}
              fontSize={12}
              fontWeight={700}
              color={"grey"}
            >
              Done
            </Text>
          </Flex>
          <Divider orientation="vertical" />
          <Flex direction={"column"} alignItems={"center"} w={100}>
            <Text
              marginLeft={"2px"}
              lineHeight={"52px"}
              fontSize={24}
              fontWeight={800}
              color={"grey"}
            >
              23
            </Text>
            <Text
              marginLeft={"2px"}
              lineHeight={"52px"}
              fontSize={12}
              fontWeight={700}
              color={"grey"}
            >
              In progress
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <TableContainer overflowY={"auto"}>
        <Table variant={"simple"}>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Léopold</Td>
              <Td>van der Elst</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>Léopold</Td>
              <Td>van der Elst</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>Léopold</Td>
              <Td>van der Elst</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>Léopold</Td>
              <Td>van der Elst</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
