import { SxProps, Theme } from '@mui/material/styles';

export const containerSx: SxProps<Theme> = {
  p: 3,
  maxWidth: 400,
  mx: 'auto',
  mt: 4,
};

export const boxSx: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};
