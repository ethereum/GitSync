import { Heading, Text, Stack, Link } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { HEAD_TITLE_LONG, HEAD_TITLE_SHORT, HEAD_DESCR } from '../constants';

import { PageMetadata } from '../components/UI';

const Home: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Home'
        description={HEAD_DESCR}
      />

      <main>
        <Heading as='h1' mb={10}>
          Welcome to Git-Sync!
        </Heading>

        <Stack mb={6} spacing={4}>
          
          <p>
          {HEAD_DESCR}
          </p>
          
          <p>
            <strong>Project repo</strong> - links to resources, coordination and feedback
            <br/>
            <Link href='https://github.com/ethereum/git-sync'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
            >
            https://github.com/ethereum/git-sync
            </Link>
          </p>

          <p>
            <strong>GitSync codebase</strong> - scripts used to perform syncs and fetching of issues
            <br/>
            <Link href='https://github.com/ethereum-git-sync/GitSync'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
            >
            https://github.com/ethereum-git-sync/GitSync
            </Link>
          </p>

          

          <p>
            <strong>Issues archive</strong> - JSON containing GitHub issues and comments for selected repositories
            <br/>
            <Link href='https://github.com/ethereum-git-sync/github-issues-archive'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
            >
            https://github.com/ethereum-git-sync/github-issues-archive
            </Link>
          </p>

          <hr/>

          <h2><strong>Frequently Asked Questions</strong></h2>

          <p>
            <h4>Which repos are sync'd?</h4>
            &#128073; &nbsp;
            <em>
            See the list of <Link 
              href='/repos'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
              >Sync'd Repositories</Link>.
            </em>
          </p>

          <p>
            <h4>Where are these repos sync'd to?</h4>
            &#128073; &nbsp;
            <em>
            We currently sync repos to a test account on Bitbucket: <Link 
              href='https://bitbucket.org/ethereum-base/'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
              >https://bitbucket.org/ethereum-base/</Link>.
            </em>
          </p>

          <p>
            <h4>How do I submit my Ethereum-related repo to Git Sync? </h4>
            &#128073; &nbsp;
            <em>
            Please read the instructions on the <Link 
              href='/submit'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
              >Submit My Repo</Link> page.
            </em>
          </p>

          <p>
            <h4>What are the qualifications for inclusion of my repo in Git Sync?</h4>
            &#128073; &nbsp;
            <em>
              The policy about inclusion are detailed on the <Link 
              href='/submit'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
              >Submit My Repo</Link> page.
            </em>
          </p>

          <p>
            <h4>Where do I ask questions or point out problems?</h4>
            &#128073; &nbsp;
            <em>
              Please <Link 
              href='https://github.com/ethereum/git-sync/issues'
              color='brand.lightblue'
              _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
              isExternal
              >submit an issue on the project repo</Link> and one of the maintainers will reply.
            </em>
          </p>

        </Stack>
      </main>
    </>
  );
};

export default Home;
