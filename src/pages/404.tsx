import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Layout from '@/components/layout/layout';
import CustomLink from '@/components/links/customLink';
import Seo from '@/components/seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <RiAlarmWarningFill
              size={60}
              className='text-yellow-300 animate-flicker drop-shadow-glow'
            />
            <h1 className='mt-8'>Page Not Found</h1>
            <CustomLink className='mt-4' href='/'>
              Back to Home
            </CustomLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
