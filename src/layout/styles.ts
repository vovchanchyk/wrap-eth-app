import { SxProps, Theme } from '@mui/material/styles';

export const styleSx: SxProps<Theme> = (theme) => ({
  width: '100vw',
  height: '100vh',
  justifyContent: 'flex-start',
  background: theme.palette.common.white,
});
