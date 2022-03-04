import type { NextPage } from 'next'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { ReactElement } from 'react';


const About = () => {
  return (
    <>
      <h1>About Page</h1>

      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.tsx</code>
      </p>
    </>
  )
};

About.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}

export default About;
