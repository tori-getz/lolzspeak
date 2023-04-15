import React, { useState } from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useAudio } from '~/hooks';
import { MicTest } from '~/components/mic-test';

export const AudioSettings: React.FC = () => {
  const { availableDevices } = useAudio();

  const [ inputId, setInputId ] = useState<string>('default');
  const [ outputId, setOutputId ] = useState<string>('default');

  const inputs = availableDevices.filter(device => device.kind === 'audioinput');
  const outputs = availableDevices.filter(device => device.kind === 'audiooutput');

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
      <Typography variant="h5">Audio</Typography>
      <FormControl fullWidth>
        <InputLabel>Output Device</InputLabel>
        <Select
          fullWidth
          value={outputId}
          onChange={e => setOutputId(e.target.value)}
        >
          {outputs.map(output => (
            <MenuItem value={output.deviceId} key={output.deviceId}>{output.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Input Device</InputLabel>
        <Select
          fullWidth
          value={inputId}
          onChange={e => setInputId(e.target.value)}
        >
          {inputs.map(input => (
            <MenuItem value={input.deviceId} key={input.deviceId}>{input.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <MicTest />
    </Box>
  )
}
