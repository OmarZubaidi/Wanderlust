import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import colors from '../styles/variables.module.scss';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
