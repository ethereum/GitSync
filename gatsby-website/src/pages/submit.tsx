import { Heading, Link, Stack, Text, List, ListItem } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PageMetadata } from '../components/UI';

const Team: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Team'
        description='About the team behind cryptography research at the Ethereum Foundation.'
      />

      <main>
        <Heading as='h1' mb={10}>
          Submit My Repo
        </Heading>

        <Stack mb={6} spacing={4}>

            
            <Heading as='h2' fontSize='3xl'>Overview</Heading>

            <p>
            If you would like to propose a repository for inclusion, please submit an issue to the Git-Sync project repo: <Link href='https://github.com/ethereum/git-sync/issues'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
            >
            <strong>https://github.com/ethereum/git-sync/issues</strong>
            </Link>
            </p>

            <Heading as='h2' fontSize='3xl'>Criteria For Inclusion</Heading>

            <ul>
              <li>Relevant to the Ethereum network and community</li>
              <li>Reasonable in size</li>
              <li>Hosting would not in violation of laws</li>
            </ul>

        </Stack>

      </main>
    </>
  );
};

export default Team;
