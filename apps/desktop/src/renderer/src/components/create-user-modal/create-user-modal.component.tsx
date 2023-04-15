import React, { useState } from 'react';
import { Avatar, Box, Button, Modal, TextField } from '@mui/material';
import { Done } from '@mui/icons-material';
import { useService } from '~/hooks';
import { useNavigate } from 'react-router-dom';
import { ScreenNames } from '~/navigation';

interface ICreateUserModal {
  open: boolean;
  onClose: () => any;
}

export const CreateUserModal: React.FC<ICreateUserModal> = ({
  open,
  onClose
}) => {
  const [ username, setUsername ] = useState<string>('');

  const { user } = useService();
  const navigate = useNavigate();

  const onSubmit = () => {
    user.setUsername(username);
    navigate(ScreenNames.Home);
  }

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
            onClick={onSubmit}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  )
};
