import fs from 'fs';
import matter from 'gray-matter';
import { Heading, Stack } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from 'next';
// import TweetEmbed from 'react-tweet-embed';

import { ExternalPost, InternalPost, PageMetadata } from '../../components/UI';

import { getParsedDate, sortByDate } from '../../utils';

import { MarkdownPost } from '../../types';
import { BLOG_POSTS_DIR } from '../../constants';

export const getStaticProps: GetStaticProps = async context => {
  // get list of files from the posts folder
  const files = fs.existsSync(BLOG_POSTS_DIR) ? fs.readdirSync(BLOG_POSTS_DIR) : [];

  // get frontmatter & slug from each post
  const posts = files.map(fileName => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`${BLOG_POSTS_DIR}/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter
    };
  });

  // return the pages static props
  return {
    props: {
      posts
    }
  };
};

interface Props {
  posts: MarkdownPost[];
}

const Blog: NextPage<Props> = ({ posts }) => {
  const internalPosts = posts.map(post => {
    //extract slug and frontmatter
    const { slug, frontmatter } = post;
    //extract frontmatter properties
    const { title, date } = frontmatter;
    const parsedDate = getParsedDate(date);

    //JSX for individual blog listing
    return <InternalPost key={slug} date={date} slug={slug} title={title} />;
  });

  return (
    <>
      <PageMetadata
        title='Announcements'
        description='View latest announcements from the Git Sync team and stakeholders.'
      />

      <main>
        <Heading as='h1' mb={10}>
          Announcements
        </Heading>

        <Stack spacing={2}>{internalPosts.sort(sortByDate)}</Stack>

        {/* <HStack spacing={8} alignItems='flex-start' wrap='wrap'>
          <TweetEmbed tweetId='1506958509195374598' />

          <TweetEmbed tweetId='1508538717660663809' />

          <TweetEmbed tweetId='1508474058748403716' />
        </HStack> */}
      </main>
    </>
  );
};

export default Blog;
