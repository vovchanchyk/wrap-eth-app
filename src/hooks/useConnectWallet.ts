import { useMemo } from 'react';
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi';
import { metaMask } from 'wagmi/connectors';

export const useConnectWallet = () => {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();
  const { data, refetch: refetchEthBalance } = useBalance({
    address,
  });

  const onConnect = () => connect({ connector: metaMask() });
  const onDisconnect = () => disconnect();

  const ethBalance = useMemo(
    () => Number(data?.formatted || 0).toFixed(2),
    [data?.formatted]
  );

  return {
    onConnect,
    onDisconnect,
    isConnected,
    ethBalance,
    refetchEthBalance,
  };
};
