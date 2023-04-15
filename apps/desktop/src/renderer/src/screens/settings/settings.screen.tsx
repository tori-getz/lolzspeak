import React from 'react';
import { ScreenContainer } from '~/containers';

import styles from './settings.module.sass';
import { EditUser } from '~/components/edit-user';
import { Box, Button } from '@mui/material';
import { AudioSettings } from '~/components/audio-settings';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const SettingsScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ScreenContainer
      title='Settings'
      className={styles.wrapper}
    >
      <Box
        sx={{
          width: '50vw',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          paddingBottom: 4
        }}
      >
        <Button
          sx={{
            alignSelf: 'flex-start',
          }}
          onClick={() => navigate(-1)}
          startIcon={<ArrowBack />}
        >
          Back
        </Button>
        <EditUser />
        <AudioSettings />
      </Box>
    </ScreenContainer>
  )
}
