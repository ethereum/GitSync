import { Heading, Text, Stack, Link } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PageMetadata } from '../components/UI';

const Home: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Home'
        description='Cryptography research group at the Ethereum Foundation.'
      />

      <main>
        <Heading as='h1' mb={10}>
          Welcome to Git-Sync!
        </Heading>

        <Stack mb={6} spacing={4}>
          
          <p>
            Coordination and infrastructure for sychronizing Ethereum-related repositories and issues across services.
          </p>
          
          <p>
            <strong>Main project repo</strong> - codebase, project feedback, coordination
            <br/>
            <Link href='https://github.com/ethereum/git-sync'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
            >
            <strong>https://github.com/ethereum/git-sync</strong>
            </Link>
          </p>

          <p>
            <strong>Issues archive</strong> - JSON containing the GitHub issues for selected repositories
            <br/>
            <Link href='https://github.com/ethereum-git-sync/GitSync'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
            >
            <strong>https://github.com/ethereum-git-sync/GitSync</strong>
            </Link>
          </p>

        </Stack>
      </main>
    </>
  );
};

export default Home;
