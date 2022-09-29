import { Box, Flex, Stack } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Profile } from "./Profile";

export function Header() {
  return (
    <Flex
      maxWidth={1120}
      w="100%"
      mx="auto"
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
  );
}
