import React from "react";
import { Aside } from "~/components/aside";
import { Content } from "~/components/content";
import { ScreenContainer } from "~/containers";

import styles from './app.module.sass';
import { SelectServer } from "~/components/select-server";
import { useStore } from "effector-react";
import { $connectedServer } from "~/store/server";
import { Chat } from "~/components/chat";

export const AppScreen: React.FC = () => {
  const connectedServer = useStore($connectedServer);

  const renderScreen = () => {
    if (connectedServer !== null) return <Chat />;

    return <SelectServer />
  }

  return (
    <ScreenContainer
      title='Lolzspeak'
      className={styles.wrapper}
    >
      <Aside />
      <Content>
        {renderScreen()}
      </Content>
    </ScreenContainer>
  )
}
