import { Box, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "../../instances";

type IAposta = {
    id?:number
}

const Aposta: NextPage = ({ id }: IAposta) => {

    const [apostas, setApostas] = useState();

    const carregaApostas = async () => {
        try {
            const response = await api.get(`/apostas/${id}`);
            setApostas(response.data);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        carregaApostas();
    }, [])

    return (
        <Box maxWidth={1120} margin="0 auto">
            <Heading color="white">Página de apostas {id || "sem id"}</Heading>
            <Text color="white">{JSON.stringify(apostas)}</Text>
        </Box>
    )
}

Aposta.getInitialProps = async ({query}) => {
    const { id } = query;
    return { id };
}

export default Aposta;