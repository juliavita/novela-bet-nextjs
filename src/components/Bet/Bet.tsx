import { Avatar, Box, HStack, Progress, Text, VStack } from "@chakra-ui/react";

type BetItemProps = {
  id: number;
  titulo: string;
  percentual: number;
  votos: number;
  image_url: string;
};

type BetProps = {
  id: number;
  tipo: string;
  titulo: string;
  opcoes: BetItemProps[];
};

export function Bet({ titulo, opcoes }: BetProps) {
  const colors = ["green", "pink", "blue", "teal", "red", "cyan"];

  return (
    <VStack align="left">
      <Text color="white" fontWeight="bold" size="lg" mb="10">
        {titulo}
      </Text>
      <HStack spacing={10} direction="row" w="100%">
        {opcoes.map((opcao, index) => (
          <Box key={opcao.id}>
            <Text color="white" fontWeight="bold" size="lg" textAlign="center">
              {opcao.titulo}
            </Text>
            <Avatar
              size="xl"
              my="4"
              name={opcao.titulo}
              src={opcao.image_url}
            />
            <Text
              color="white"
              fontWeight="bold"
              size="lg"
              textAlign="center"
              mb="5"
            >
              {opcao.votos}
            </Text>

            <Progress
              colorScheme={colors[index]}
              height="4px"
              value={opcao.percentual}
            />
          </Box>
        ))}
      </HStack>
    </VStack>
  );
}
