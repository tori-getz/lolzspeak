import React from 'react';
import { Avatar, Box, Fab } from '@mui/material';
import logo from '~/resources/logo.svg';
import { ExitToApp, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ScreenNames } from '~/navigation';
import { ServerList } from '~/components/server-list';

export const Aside: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '80px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 1,
        gap: 1
      }}
    >
      <Avatar
        sx={{
          mt: '32px',
          width: 50,
          height: 50
        }}
      >
        <img src={logo} width={25} />
      </Avatar>
      <ServerList />
      <Fab
        sx={{
          width: 50,
          height: 50,
        }}
        onClick={() => navigate(ScreenNames.Settings)}
      >
        <Settings />
      </Fab>
      <Fab
        sx={{
          width: 50,
          height: 50,
        }}
        color='secondary'
        onClick={() => navigate(ScreenNames.CreateAccount)}
      >
        <ExitToApp />
      </Fab>
    </Box>
  )
}
