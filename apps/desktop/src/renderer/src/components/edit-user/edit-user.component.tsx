import React, { useState } from 'react'
import { Box, Avatar, TextField, Button, Typography } from '@mui/material'
import { useStore } from 'effector-react'
import { $username } from '~/store/user'
import { useService } from '~/hooks'
import { Done, Save } from '@mui/icons-material';

export const EditUser: React.FC = () => {
  const storeUsername = useStore($username);

  const { user } = useService();

  const [ username, setUsername ] = useState<string>(storeUsername);
  const [ saved, setSaved ] = useState<boolean>(false);

  const onSubmit = () => {
    user.setUsername(username);

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 1500);
  }

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        width: 'auto'
      }}
    >
      <Typography variant='h5'>User</Typography>
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
          label="Username"
          value={username}
          fullWidth
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          variant={saved ? 'contained' : 'outlined'}
          startIcon={
            saved ? <Done /> : <Save />
          }
          color={saved ? 'success' : 'primary'}
          disabled={!username}
          onClick={onSubmit}
        >
          {saved ? 'Saved' : 'Save'}
        </Button>
      </Box>
    </Box>
  )
}
