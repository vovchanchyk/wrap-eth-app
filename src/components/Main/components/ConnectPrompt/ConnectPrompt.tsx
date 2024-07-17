import { Stack, Typography, Button, Card } from '@mui/material';
import { useConnectWallet } from '~/hooks';
import { cardSx } from './styles';

export const ConnectPrompt: React.FC = () => {
  const { onConnect } = useConnectWallet();
  return (
    <Card sx={cardSx}>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={4}
        padding={10}
      >
        <Typography variant="h5" color="secondary">
          Connect the Wallet please
        </Typography>
        <Button variant="contained" onClick={onConnect}>
          connect
        </Button>
      </Stack>
    </Card>
  );
};
