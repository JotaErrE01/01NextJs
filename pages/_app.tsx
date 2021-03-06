import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import { NextPage } from 'next';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
