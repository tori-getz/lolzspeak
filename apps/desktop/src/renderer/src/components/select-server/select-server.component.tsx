import React from 'react';
import { Box, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

export const SelectServer: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1
      }}
    >
      <ArrowBack />
      <Typography
        fontSize={25}
        fontWeight='300'
      >
        Select or add server
      </Typography>
    </Box>
  )
}
