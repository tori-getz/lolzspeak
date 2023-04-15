import React, { useState } from 'react'
import { Avatar, Box, Fab } from '@mui/material'
import { Add } from '@mui/icons-material'
import { AddServerModal } from '../add-server-modal'
import { useStore } from 'effector-react'
import { $serverList } from '~/store/server'
import { useService } from '~/hooks'

export const ServerList: React.FC = () => {
  const [ addServerVisible, setAddServerVisible ] = useState<boolean>(false);

  const { server } = useService();

  const serverList = useStore($serverList);

  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          gap: 1,
          flexDirection: 'column',
          cursor: 'pointer',
          overflow: 'scroll'
        }}
      >
        {serverList.map(serv => (
          <Avatar
            key={serv.id}
            sx={{
              width: 50,
              height: 50,
            }}
            src={`${serv.host}/ServerIcon.png`}
            onClick={() => server.connect(serv)}
          />
        ))}
        <Fab
          sx={{
            width: 50,
            height: 50
          }}
          onClick={() => setAddServerVisible(true)}
        >
          <Add />
        </Fab>
      </Box>
      <AddServerModal
        open={addServerVisible}
        onClose={() => setAddServerVisible(false)}
      />
    </>
  )
}
