import React from 'react';
import classNames from 'clsx';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Container = ({ className, children }: Props) => {
  return (
    <div className={classNames('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
};
