import { Address } from 'abitype';

export type UseUpdateBalances = (
  hash: Address | undefined,
  callback: () => void
) => void;
