import React, { useState } from 'react';
import { ScreenContainer } from '~/containers';
import logo from '~/resources/logo.svg';

import styles from './create-acount.module.sass';
import { Button } from '@mui/material';
import { CreateUserModal } from '~/components/create-user-modal';

export const CreateAccountScreen: React.FC = () => {
  const [ modalVisible, setModalVisible ] = useState<boolean>(false);

  return (
    <ScreenContainer
      title='Create account'
      className={styles.wrapper}
    >
      <img
        src={logo}
        width={150}
        height={150}
      />
      <h1>Lolzspeak</h1>
      <Button
        variant='contained'
        onClick={() => setModalVisible(true)}
      >
        Create account
      </Button>
      <CreateUserModal
        open={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </ScreenContainer>
  )
}
