import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

interface IContent {
  children: ReactNode;
}

export const Content: React.FC<IContent> = ({
  children
}) => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        width: '100%',
        p: 2,
        pt: '30px'
      }}
    >
      {children}
    </Box>
  )
}
