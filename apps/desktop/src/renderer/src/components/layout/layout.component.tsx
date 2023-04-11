import React, { ReactNode } from 'react';
import { Typography } from '@mui/material';

import cn from 'classnames';
import styles from './layout.module.sass';

interface ILayout {
  title?: string;
  children?: ReactNode;
  className?: string;
}

export const Layout: React.FC<ILayout> = ({
  title,
  children,
  className
}) => {
  return (
    <div className={cn(className, styles.layout)}>
      <div
        className={styles.draggable}
      >
        {title && (
          <Typography>{title}</Typography>
        )}
      </div>
      {children}
    </div>
  )
}
