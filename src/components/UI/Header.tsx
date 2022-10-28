import { Box, Container, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import EFlogo from '../../../public/images/ef-logo.svg';

import { HOME_URL } from '../../constants';
import { Nav } from '../Nav';

export const Header: FC = () => {
  const router = useRouter();

  return (
    <header>
      <Container maxW={{ md: 'container.md', lg: 'container.lg', xl2: 'container.xl' }}>

        <Flex justifyContent='space-between' px={{ base: 2, md: 0 }}>

          <Box pt={2} onClick={() => router.push(HOME_URL)} cursor='pointer'>
            <Image src={EFlogo} alt='Ethereum Foundation logo' height={40} priority />
          </Box>

          <Box pt={4} onClick={() => router.push(HOME_URL)} cursor='pointer'>
            <strong>Git-Sync Project</strong>
          </Box>
          
          <Box pt={4}>
            <Nav />
          </Box>

        </Flex>
      </Container>
    </header>
  );
};
