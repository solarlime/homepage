import { memo, ReactNode } from 'react';

import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

import styles from './Base.module.sass';

const SkeletonComponent = memo(
  (props: {
    error: FetchBaseQueryError | SerializedError | undefined;
    content: string | undefined;
    isLoading: boolean;

    children?: ReactNode;
  }) => {
    const { error, content, isLoading, children } = props;

    if (error) return 'Loading data failed';
    if (isLoading) return <span className={styles.skeleton} />;
    if (content) return content;
    if (children) return children;
    return 'No data to load!';
  },
);

export default SkeletonComponent;
