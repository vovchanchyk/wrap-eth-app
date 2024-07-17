import { UseUpdateBalances } from './types';
import { useEffect } from 'react';
import { useWaitForTransactionReceipt } from 'wagmi';

export const useUpdateBalances: UseUpdateBalances = (hash, callback) => {
  const { isSuccess } = useWaitForTransactionReceipt({
    hash: hash,
  });

  useEffect(() => {
    if (isSuccess) {
      callback();
    }
  }, [isSuccess, callback]);
};
