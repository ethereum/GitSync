import { Heading, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Repository, PageMetadata } from '../components/UI';

const Events: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Repositories'
        description="View repositories which are sync'd"
      />

      <main>
        <Heading as='h1' mb={10}>
          Sync&apos;d Repositories
        </Heading>

        <Stack mb={6} spacing={8}>

          <hr/>

          <Heading as='h2' fontSize='3xl'>
            Protocol Clients
          </Heading>


          <Repository service="github" uri="ethereum/go-ethereum" title="Go Ethereum">
            Official Go implementation of the Ethereum protocol
          </Repository>

          <hr/>

          <Heading as='h2' fontSize='3xl'>
            Coordination
          </Heading>

          <Repository service="github" uri="ethereum/consensus-specs" title="Consensus Specs">
            Ethereum Proof-of-Stake Consensus Specifications
          </Repository>

          <Repository service="github" uri="ethereum/EIPs" title="EIPs">
            The Ethereum Improvement Proposal repository
          </Repository>

          <Repository service="github" uri="ethereum/PM" title="Project Management">
            The Ethereum Project Management Repository
          </Repository>

          <hr/>

          <Heading as='h2' fontSize='3xl'>
            DeFi
          </Heading>

          <Repository service="github" uri="flashbots/mev-boost" title="MEV-Boost">
            Allows proof-of-stake Ethereum consensus clients to outsource block construction
          </Repository>

          <Repository service="github" uri="flashbots/mev-boost-relay" title="MEV-Boost Relay">
            Flashbots mev-boost relay for proposer/builder separation in Ethereum
          </Repository>

          <hr/>

          <Heading as='h2' fontSize='3xl'>
            Dev Tools
          </Heading>

          <Repository service="github" uri="ethereum/remix-project" title="Remix Project">
            Browser-based compiler and IDE that enables users to build Ethereum contracts and to debug transactions.
          </Repository>

          <Repository service="github" uri="ethereum/solidity" title="Solidity">
            The Solidity Contract-Oriented Programming Language
          </Repository>

          <hr/>

        </Stack>
      </main>
    </>
  );
};

export default Events;
