import { Stack } from '@mui/material';
import { FC } from 'react';
import { Main, Header } from '~/components';
import { styleSx } from './styles';

export const Layout: FC = () => {
  return (
    <Stack sx={styleSx}>
      <Header />
      <Main />
    </Stack>
  );
};
