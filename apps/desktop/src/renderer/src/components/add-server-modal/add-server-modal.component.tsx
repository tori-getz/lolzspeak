import React, { useCallback, useEffect, useState } from 'react'
import { Avatar, Box, Button, Modal, TextField, Typography } from '@mui/material'
import { debounce } from 'lodash'
import { ArrowForward } from '@mui/icons-material'
import { useService } from '~/hooks'
import { IServerInfo } from '~/types'

interface IAddServerModal {
  open: boolean
  onClose: () => any
}

export const AddServerModal: React.FC<IAddServerModal> = ({ open, onClose }) => {
  const [host, setHost] = useState<string>('')
  const [serverInfo, setServerInfo] = useState<IServerInfo | null>(null)

  const { server } = useService();

  const checkServer = useCallback(async () => {
    if (!host) {
      setServerInfo(null)
      return
    }

    try {
      const serverInfo = await server.getInfo(host)

      setServerInfo(serverInfo)
    } catch (e: any) {
      console.error(e)
    }
  }, [host])

  useEffect(() => {
    checkServer()
  }, [host])

  const onJoin = async () => {
    const joinedServer = await server.join(host, serverInfo!.name);
    server.connect(joinedServer);
    onClose();
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
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        {serverInfo && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Avatar
              sx={{
                width: 100,
                height: 100
              }}
              src={`${host}/ServerIcon.png`}
            />
            <Typography>{serverInfo.name}</Typography>
          </Box>
        )}
        <TextField label="Host" onChange={debounce((e) => setHost(e.target.value), 500)} />
        <Button
          variant="contained"
          disabled={serverInfo === null}
          startIcon={<ArrowForward />}
          onClick={onJoin}
        >
          Join
        </Button>
      </Box>
    </Modal>
  )
}
