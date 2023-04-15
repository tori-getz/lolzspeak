import { useStore } from 'effector-react';
import React, { ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import { Layout } from '~/components/layout';
import { ScreenNames } from '~/navigation';
import { $username } from '~/store/user';

export interface IScreenContainer {
  children?: ReactNode;
  title?: string;
  className?: string;
}

export const ScreenContainer: React.FC<IScreenContainer> = ({
  children,
  title = '',
  className,
}) => {
  const username = useStore($username);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate(ScreenNames.CreateAccount);
    }
  }, [username])

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout className={className} title={title}>
        {children}
      </Layout>
    </>
  )
}
