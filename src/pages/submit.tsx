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
              </Link>.
            </p>

            <p>
              When you submit the issue, please specify the following information: 


              <ol style={{ marginLeft: '1rem' }}>
                <li>Project repo URL</li>
                <li>Title and description</li>
                <li>Maintainers and/or sync contact email address</li>
                <li>Explanation if it is not immediately clear that the repo is Ethereum-related</li>
                <li>Anything especially relevant or timely. For example: Is this repo about to be removed?</li>
              </ol>

            </p>

            A project maintainer will respond ASAP.

            <Heading as='h2' fontSize='3xl'>Criteria For Inclusion</Heading>

            <p>
              Generally, the repo would be fit for inclusion if it could be hosted under the "ethereum" GitHub organization, a resource managed for the community by the Ethereum Foundation.
            </p>

            <p>
              More specifically, inclusion means that the repo is:

              <ol style={{ marginLeft: '1rem' }}>
                <li>Active</li>
                <li>Relevant to the Ethereum network and community</li>
                <li>Not too large in size</li>
                <li>In compliance with laws (submissions are subject to legal review by the Ethereum Foundation)</li>
              </ol>

            </p>
            
        </Stack>

      </main>
    </>
  );
};

export default Team;
