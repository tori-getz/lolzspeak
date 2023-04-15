import React from 'react';
import { Avatar, Box, Fab, Typography } from '@mui/material';
import { useStore } from 'effector-react';
import { $connectedServer } from '~/store/server';
import { Call } from '@mui/icons-material';

export const ServerHeader: React.FC = () => {
  const connectedServer = useStore($connectedServer);

  return (
    <Box
      sx={{
        py: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}
    >
      <Avatar
        src={`${connectedServer?.host}/ServerIcon.png`}
      />
      <Typography sx={{ flex: 1 }}>{connectedServer?.name}</Typography>
      <Fab size='small'>
        <Call />
      </Fab>
    </Box>
  )
}
