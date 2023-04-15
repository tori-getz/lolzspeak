import React from 'react';
import { Box, Fab, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';

export const ChatInput: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2
      }}
    >
      <TextField
        fullWidth
        label='Message'
        size='small'
        variant='standard'
      />
      <Fab
        size='small'
        color='primary'
      >
        <Send />
      </Fab>
    </Box>
  );
};
