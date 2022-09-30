import { Box, Heading, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { ProductList } from "src/components/ProductList";
import { Bet } from "../components/Bet";
import { Header } from "../components/Header";
import { api } from "../instances";

const Home: NextPage = () => {
  const [homeContents, setHomeContents] = useState<any>();

  const load = useCallback(async () => {
    try {
      const response = await api.get(`/home`);
      setHomeContents(response.data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Box margin="0 auto" pb="50">
      <Header background={homeContents?.destaque?.image_url} />

      <Box maxWidth={1140} margin="0 auto">
        <Heading color="white" py="10">
          Apostas do dia
        </Heading>
        {homeContents?.apostas && (
          <Stack direction="row" justifyContent="space-between">
            {homeContents?.apostas.map((aposta: any) => (
              <Bet key={aposta.id} {...aposta} />
            ))}
          </Stack>
        )}

        {homeContents?.produtos && (
          <Box>
            <Heading color="white" py="10">
              Novelas em Bet
            </Heading>
            <ProductList items={homeContents?.produtos} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
