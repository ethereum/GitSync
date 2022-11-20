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
      <strong>{title}</strong>

      <em>{children}</em>

        <Link
          href={'https://github.com/' + uri}
          color='brand.lightblue'
          _hover={{ color: 'brand.orange', textDecoration: 'underline' }}
          isExternal
        >
          <strong>{'https://github.com/' + uri}</strong>
        </Link>{' '}

    </Stack>
  );
};
