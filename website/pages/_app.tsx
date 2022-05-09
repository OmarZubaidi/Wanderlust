import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { Auth0Provider } from '@auth0/auth0-react';
import { AppWrapper } from '../components/AppWrapper';
import { isSSR } from '../utils/isSSR';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper
      domain_env={process.env.DOMAIN!}
      clientId_env={process.env.CLIENT_ID!}
    >
      <Component {...pageProps} />
    </AppWrapper>
  );
}
// AppWrapper.getInitialProps = async (ctx) => {
//   return {
//     domain_env: process.env.DOMAIN!,
//     clientId_env: process.env.CLIENT_ID!,
//   };
// };

// export const getStaticProps = () => {
//   return {
//     props: {
//       domain_env: process.env.DOMAIN,
//       clientId_env: process.env.CLIENT_ID,
//     },
//   };
// };

export default MyApp;
