import { Button, Stack } from "@chakra-ui/react";

export function Menu() {
  return (
    <Stack w="100%" p={4} color="white" direction="row" spacing={4}>
      <Button colorScheme="white" variant="link">
        Ranking Geral
      </Button>
      <Button colorScheme="white" variant="link">
        Favoritos
      </Button>
      <Button colorScheme="white" variant="link">
        Premiações
      </Button>
      <Button colorScheme="white" variant="link" as="a" href="/apostas/1">
        Apostas
      </Button>
    </Stack>
  );
}
