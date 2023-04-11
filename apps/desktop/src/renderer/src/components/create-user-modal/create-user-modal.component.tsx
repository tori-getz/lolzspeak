import React, { useState } from 'react';
import { Avatar, Box, Button, Modal, TextField } from '@mui/material';
import { Done } from '@mui/icons-material';

interface ICreateUserModal {
  open: boolean;
  onClose: () => any;
  onSubmit: (username: string) => any;
}

export const CreateUserModal: React.FC<ICreateUserModal> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [ username, setUsername ] = useState<string>('');

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        sx={{
          backgroundColor: 'background.paper',
          p: 4,
          display: 'flex',
          flexDirection: 'row',
          gap: 4,
        }}
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            cursor: 'pointer'
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <TextField
            label='Username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Button
            variant='outlined'
            startIcon={<Done />}
            disabled={!username}
            onClick={() => onSubmit(username)}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  )
};
