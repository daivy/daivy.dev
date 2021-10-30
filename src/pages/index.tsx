import * as React from 'react';

import Layout from '@/components/layout/layout';
import CustomLink from '@/components/links/customLink';
import Badge from '@/components/other/badge';
import Seo from '@/components/seo';

const knowledges = [
  { label: 'C#', backgroundColor: 'bg-purple-600' },
  { label: '.NET Framework', backgroundColor: 'bg-purple-600' },
  { label: '.NET Core', backgroundColor: 'bg-purple-600' },
  { label: 'ASP.NET', backgroundColor: 'bg-purple-600' },
  { label: 'ASP.NET Core', backgroundColor: 'bg-purple-600' },
  { label: 'Java (Android)', backgroundColor: 'bg-green-600' },
  { label: 'JavaScript', backgroundColor: 'bg-blue-600' },
  { label: 'TypeScript', backgroundColor: 'bg-blue-600' },
  { label: 'Vue.JS', backgroundColor: 'bg-blue-600' },
  { label: 'Angular.JS', backgroundColor: 'bg-blue-600' },
  { label: 'React', backgroundColor: 'bg-blue-600' },
];

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <section>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <h1>Daivy van de Graaf</h1>
            <h6 className='mt-5'>Knowledge</h6>
            <div className='flex flex-wrap justify-center mt-2'>
              {knowledges.map(({ label, backgroundColor }) => (
                <Badge
                  backgroundColor={backgroundColor}
                  className='flex-none m-2'
                  key={label}
                >
                  {label}
                </Badge>
              ))}
            </div>
            <p className='mt-2 text-sm text-gray-200'>
              <CustomLink href='https://github.com/daivy/daivy.dev'>
                See this repository
              </CustomLink>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
