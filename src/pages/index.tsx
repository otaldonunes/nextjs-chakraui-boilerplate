import { Flex, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { api } from '../services/api';

export default function Home() {
  const { data, isLoading, isFetching, error } = useQuery(
    'something',
    async () => {
      // TODO: fetch and return something
    },
    {
      staleTime: 1000 * 60 * 60, // 1 hour
    }
  );

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Text>Boilerplate (Next.js + ChakraUI + React Query + Axios)</Text>
    </Flex>
  );
}
