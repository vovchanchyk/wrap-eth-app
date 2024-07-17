import { useMemo } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { wethContractConfig } from './config';
import { parseEther, formatEther } from 'viem';
import { useConnectWallet } from '~/hooks';
import { useUpdateBalances } from './useUpdateBalances';

const { abi, address } = wethContractConfig;
export const useWeth = () => {
  const { address: walletAddress } = useAccount();
  const { writeContract, data: transactionHash } = useWriteContract();

  const { data, refetch: refetchWethBalance } = useReadContract({
    address,
    abi,
    functionName: 'balanceOf',
    args: [walletAddress],
  });

  const wethBalance = useMemo(
    () => (data ? formatEther(data as bigint) : '0'),
    [data]
  );

  const { ethBalance, refetchEthBalance } = useConnectWallet();

  const deposit = (amount: string) =>
    writeContract({
      address,
      abi,
      functionName: 'deposit',
      value: parseEther(amount),
    });

  const withdraw = (amount: string) =>
    writeContract({
      address,
      abi,
      functionName: 'withdraw',
      args: [parseEther(amount)],
    });

  useUpdateBalances(transactionHash, () => {
    refetchEthBalance();
    refetchWethBalance();
  });

  return { withdraw, deposit, wethBalance, ethBalance };
};
