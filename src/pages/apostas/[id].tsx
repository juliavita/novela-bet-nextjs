import {
  Box,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { Bet } from "../../components/Bet";
import { Header } from "../../components/Header";
import { api } from "../../instances";

type IAposta = {
  id?: number;
};

const Aposta: NextPage = ({ id }: IAposta) => {
  const [contents, setContents] = useState<any>();

  const load = useCallback(async () => {
    try {
      const response = await api.get(`/apostas/${id}`);
      setContents(response.data);
    } catch (error) {}
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Box margin="0 auto" pb="50">
      <Header background={contents?.image_url} />

      <Box maxWidth={1140} margin="0 auto">
        <Heading color="white" py="10">
          Apostas do dia
        </Heading>
        {contents?.apostas && (
          <Stack direction="row" justifyContent="space-between">
            {contents?.apostas.map((aposta: any) => (
              <Bet key={aposta.id} {...aposta} />
            ))}
          </Stack>
        )}

        <Heading color="white" pt="10">
          Histórico de apostas
        </Heading>

        <TableContainer>
          <Table variant="simple" color="white">
            <Thead>
              <Tr>
                <Th>Pergunta</Th>
                <Th>Gabarito</Th>
                <Th>Sua resposta</Th>
                <Th>Sua aposta</Th>
                <Th>Retorno</Th>
                <Th>Gráfico Geral</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contents?.historico.map((item: any) => (
                <Tr key={item.id}>
                  <Td>{item.titulo}</Td>
                  <Td>{item.gabarito}</Td>
                  <Td>{item.sua_aposta}</Td>
                  <Td>{item.aposta}</Td>
                  <Td>{item.retorno}</Td>
                  <Td>{item.geral}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

Aposta.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};

export default Aposta;
