import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { Layout } from '~/components/layout';

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
