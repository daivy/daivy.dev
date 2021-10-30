import clsx from 'clsx';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/unstyledLink';

export default function Link({
  children,
  className = '',
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'inline-flex items-center font-bold dark:text-white dark:hover:text-purple-600',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
