import { Box, Flex, Stack } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Profile } from "./Profile";

type HeaderProps = {
  background?: string;
};

export function Header({ background }: HeaderProps) {
  return (
    <Flex
      w={"full"}
      h={"600px"}
      backgroundImage={`url(${background ?? "/header.png"})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <Flex
        w="100%"
        maxW={1140}
        height="50px"
        mx="auto"
        m="0 auto"
        p={10}
        align="center"
        justify="space-between"
      >
        <Stack direction="row" align="center">
          <Logo />
          <Menu />
        </Stack>
        <Box>
          <Profile />
        </Box>
      </Flex>
    </Flex>
  );
}
