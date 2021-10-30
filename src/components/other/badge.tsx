import clsx from 'clsx';
import * as React from 'react';

type BadgeProps = {
  backgroundColor?: string;
} & React.ComponentProps<'div'>;

export default function Badge({
  children,
  backgroundColor = 'bg-purple-600',
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      className={clsx(
        'text-sm rounded-full px-2 text-gray-900 dark:text-white',
        backgroundColor,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
