import { FC } from 'react';
import { useAccount } from 'wagmi';
import { ConnectPrompt, Wrapper } from './components';

export const Main: FC = () => {
  const { isConnected } = useAccount();

  return isConnected ? <Wrapper /> : <ConnectPrompt />;
};
