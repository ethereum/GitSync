import { Heading, Link, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  service: string;
  uri: string;
  title:string;
}

export const Repository: FC<Props> = ({ service, uri, title, children }) => {
  return (
    <Stack>
      <Heading as='h3' fontSize='2xl' fontWeight={600} mb={2}>
        {title}
      </Heading>

        <p><em>{children}</em></p>

      <Text mb={10}>
        <Link
          href={'https://github.com/' + uri}
          color='brand.lightblue'
          _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
          isExternal
        >
          <strong>{'https://github.com/' + uri}</strong>
        </Link>{' '}

      </Text>
    </Stack>
  );
};
