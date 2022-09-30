import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Logo } from "../components/Header";

const Main: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex width="100%" maxWidth={360} p="8" borderRadius={8} flexDir="column">
        <Logo />
      </Flex>
    </Flex>
  );
};

export default Main;
