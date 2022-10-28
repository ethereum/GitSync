import { Link, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer>
      <Stack>
        <Text>
          <Link
            href='mailto:git-sync@ethereum.org'
            textDecoration='underline'
            color='gray.500'
            _hover={{ color: 'brand.blue' }}
          >
            git-sync@ethereum.org
          </Link>
        </Text>
      </Stack>
    </footer>
  );
};
