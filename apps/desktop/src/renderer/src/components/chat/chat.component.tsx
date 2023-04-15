import { Box } from '@mui/material'
import React from 'react'
import { ChatInput } from '../chat-input'
import { Message } from '~/components/message'
import { ServerHeader } from '~/components/server-header'

export const Chat: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <ServerHeader />
      <Box
        sx={{
          flex: 1,
          gap: 1,
          display: 'flex',
          flexDirection: 'column-reverse',
          overflow: 'scroll'
        }}
      >
        <Message name="torigetz" text="haha classic 1" />
        <Message name="torigetz" text="haha classic 2" />
        <Message name="torigetz" text="haha classic 3" />
        <Message name="torigetz" text="haha classic 1" />
        <Message name="torigetz" text="haha classic 2" />
        <Message name="torigetz" text="haha classic 3" />
        <Message name="torigetz" text="haha classic 1" />
        <Message name="torigetz" text="haha classic 2" />
        <Message name="torigetz" text="haha classic 3" />
        <Message name="torigetz" text="haha classic 1" />
        <Message name="torigetz" text="haha classic 2" />
        <Message name="torigetz" text="haha classic 3" />
        <Message name="torigetz" text="haha classic 1" />
        <Message name="torigetz" text="haha classic 2" />
        <Message name="torigetz" text="haha classic 3" />
        <Message name="torigetz" text="haha classic 1" />
        <Message name="torigetz" text="haha classic 2" />
        <Message name="torigetz" text="haha classic 3" />
        <Message name="torigetz" text="haha classic 1" />
        <Message name="torigetz" text="haha classic 2" />
        <Message name="torigetz" text="haha classic 3" />
        <Message name="torigetz" text="haha classic 1" />
        <Message name="torigetz" text="haha classic 2" />
        <Message name="torigetz" text="haha classic 3" />
        <Message name="torigetz" text="haha classic 1" />
        <Message name="torigetz" text="haha classic 2" />
        <Message name="torigetz" text="haha classic 3" />
        <Message name="torigetz" text="haha classic 1" />
        <Message name="torigetz" text="haha classic 2" />
        <Message name="torigetz" text="haha classic 3" />
        <Message name="torigetz" text="haha classic 1" />
        <Message name="torigetz" text="haha classic 2" />
        <Message name="torigetz" text="haha classic 3" />
      </Box>
      <ChatInput />
    </Box>
  )
}
