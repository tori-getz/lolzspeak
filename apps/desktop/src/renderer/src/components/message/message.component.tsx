import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

interface IMessage {
  name: string;
  text: string;
}

export const Message: React.FC<IMessage> = ({
  name,
  text,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1
      }}
    >
      <Avatar />
      <Box>
        <Typography
          color='primary'
          fontSize={14}
        >
          {name}
        </Typography>
        <Typography fontSize={16}>
          {text}
        </Typography>
      </Box>
    </Box>
  )
}
