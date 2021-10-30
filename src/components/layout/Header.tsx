import * as React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import UnstyledLink from '@/components/links/unstyledLink';

export default function Header() {
  return (
    <header className='absolute z-50 w-full'>
      <div className='flex justify-end p-10'>
        <UnstyledLink
          href='https://www.linkedin.com/in/daivyvandegraaf'
          className='px-2'
        >
          <FiLinkedin className='text-3xl cursor-pointer icon dark:text-white dark:hover:text-purple-600'></FiLinkedin>
        </UnstyledLink>
        <UnstyledLink href='https://github.com/daivy' className='px-2'>
          <FiGithub className='text-3xl cursor-pointer icon dark:text-white dark:hover:text-purple-600'></FiGithub>
        </UnstyledLink>
      </div>
    </header>
  );
}
