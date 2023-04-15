import React, { useRef, useState } from 'react'
import { Button, LinearProgress } from '@mui/material'
import { PlayArrow, Stop } from '@mui/icons-material'
import { useInjection } from 'inversify-react'
import { IAudioInputManager } from '~/common/audio'
import { AUDIO_INPUT_MANAGER } from '~/common/di'


export const MicTest: React.FC = () => {
  const [started, setStarted] = useState<boolean>(false);

  const audioInputManager = useInjection<IAudioInputManager>(AUDIO_INPUT_MANAGER);
  const disconnectRef = useRef<Function | null>(null);

  const startTest = async () => {
    setStarted(true);
    disconnectRef.current = await audioInputManager.monitor();
  };

  const stopTest = () => {
    setStarted(false);
    disconnectRef.current && disconnectRef.current();
    disconnectRef.current = null;
  };

  return (
    <>
      <LinearProgress
        variant="determinate"
        color="inherit"
        sx={{
          width: '100%'
        }}
        value={0}
      />
      {!started ? (
        <Button
          fullWidth
          startIcon={<PlayArrow />}
          onClick={startTest}
          variant='outlined'
        >
          Start Mic test
        </Button>
      ) : (
        <Button
          fullWidth
          startIcon={<Stop />}
          color='error'
          onClick={stopTest}
          variant='outlined'
        >
          Stop Mic test
        </Button>
      )}
    </>
  )
}
