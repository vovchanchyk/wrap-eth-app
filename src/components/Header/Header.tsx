import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { FC } from 'react';
import { useConnectWallet } from '~/hooks';
import { titleSx } from './styles';

export const Header: FC = () => {
  const { onConnect, onDisconnect, isConnected } = useConnectWallet();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={titleSx}>
            Wrap eth app
          </Typography>

          {isConnected ? (
            <Button color="inherit" onClick={onDisconnect}>
              Disconnect
            </Button>
          ) : (
            <Button color="inherit" onClick={onConnect}>
              Connect
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
