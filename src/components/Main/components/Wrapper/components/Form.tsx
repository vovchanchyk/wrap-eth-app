import {
  Paper,
  Box,
  Stack,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { FC, useMemo, useState } from 'react';
import { containerSx, boxSx } from './styles';
import { Props } from './types';

export const Form: FC<Props> = ({ title, callback, balance, funcName }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const tokensValue = useMemo(() => {
    return (+inputValue / 100).toString();
  }, [inputValue]);

  return (
    <Paper elevation={3} sx={containerSx}>
      <Box component="form" sx={boxSx}>
        <Stack>
          <Typography variant="h6">
            {title} balance : {balance}
          </Typography>
        </Stack>
        <TextField
          label="Enter a number"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          fullWidth
        />
        <Typography variant="h6">
          {tokensValue} {title} to convert
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            callback(tokensValue);
            setInputValue('');
          }}
        >
          {funcName}
        </Button>
      </Box>
    </Paper>
  );
};
