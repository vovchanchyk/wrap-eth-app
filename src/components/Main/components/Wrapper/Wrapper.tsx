import React from 'react';
import { Stack } from '@mui/material';
import { useWeth } from './hooks';
import { Form } from './components';

export const Wrapper: React.FC = () => {
  const { withdraw, deposit, wethBalance, ethBalance } = useWeth();

  return (
    <Stack direction="row">
      <Form
        title="WETH"
        callback={withdraw}
        funcName="withdraw"
        balance={wethBalance}
      />
      <Form
        title="ETH"
        callback={deposit}
        funcName="deposit"
        balance={ethBalance}
      />
    </Stack>
  );
};
