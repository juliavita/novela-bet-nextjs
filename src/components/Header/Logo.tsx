import { Image, Stack } from "@chakra-ui/react";

export function Logo() {
  return (
    <Stack as="a" href="/home">
      <Image src="/logo.svg" alt="Logo Novela Bet" height="4" />
    </Stack>
  );
}
