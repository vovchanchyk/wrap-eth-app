// src/wagmiConfig.js
import { FC, ReactNode } from 'react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { sepolia } from '@wagmi/core/chains';

const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
});

interface Props {
  children: ReactNode;
}

export const EthProvider: FC<Props> = ({ children }) => {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
};
